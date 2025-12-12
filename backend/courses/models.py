from django.db import models
from teachers.models import Enseignant, Matiere
from schools.models import Classe

class Cours(models.Model):
    enseignant = models.ForeignKey(
        Enseignant,
        on_delete=models.CASCADE,
        related_name="cours"
    )
    classe = models.ForeignKey(
        Classe,
        on_delete=models.CASCADE,
        related_name="cours"
    )
    matiere = models.ForeignKey(
        Matiere,
        on_delete=models.CASCADE,
        related_name="cours"
    )
    titre = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    date_publication = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.titre} - {self.classe.nom}"

    class Meta:
        verbose_name = "Cours"
        verbose_name_plural = "Cours"


class Ressource(models.Model):
    cours = models.ForeignKey(
        Cours,
        on_delete=models.CASCADE,
        related_name="ressources"
    )
    fichier = models.FileField(upload_to="resources/")
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.fichier.name} - {self.cours.titre}"

    class Meta:
        verbose_name = "Ressource"
        verbose_name_plural = "Ressources"


class Devoir(models.Model):
    cours = models.ForeignKey(
        Cours,
        on_delete=models.CASCADE,
        related_name="devoirs"
    )
    titre = models.CharField(max_length=255)
    consigne = models.TextField()
    date_publication = models.DateTimeField(auto_now_add=True)
    date_limite = models.DateTimeField()

    def __str__(self):
        return f"{self.titre} - {self.cours.classe.nom}"

    class Meta:
        verbose_name = "Devoir"
        verbose_name_plural = "Devoirs"
