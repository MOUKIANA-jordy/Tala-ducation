from django.db import models
from students.models import Eleve
from teachers.models import Matiere
from teachers.models import Enseignant
from schools.models import Classe
from courses.models import Cours

class Absence(models.Model):
    eleve = models.ForeignKey(
        Eleve,
        on_delete=models.CASCADE,
        related_name="absences"
    )
    date = models.DateField()
    motif = models.TextField(blank=True)
    justifie = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.eleve.user.get_full_name()} - {self.date}"

    class Meta:
        verbose_name = "Absence"
        verbose_name_plural = "Absences"

class Retard(models.Model):
    eleve = models.ForeignKey(
        Eleve,
        on_delete=models.CASCADE,
        related_name="retards"
    )
    date = models.DateField()
    minutes = models.IntegerField()

    def __str__(self):
        return f"{self.eleve.user.get_full_name()} - {self.minutes} min"

    class Meta:
        verbose_name = "Retard"
        verbose_name_plural = "Retards"


class EmploiDuTemps(models.Model):
    classe = models.ForeignKey(
        Classe,
        on_delete=models.CASCADE,
        related_name="emplois_du_temps"
    )
    jour = models.CharField(max_length=20)
    horaire_debut = models.TimeField()
    horaire_fin = models.TimeField()
    matiere = models.ForeignKey(
        Matiere,
        on_delete=models.CASCADE,
        related_name="emplois_du_temps"
    )
    salle = models.CharField(max_length=50)
    enseignant = models.ForeignKey(
        Enseignant,
        on_delete=models.CASCADE,
        related_name="emplois_du_temps"
    )

    def __str__(self):
        return f"{self.classe.nom} - {self.jour} {self.horaire_debut}-{self.horaire_fin}"

    class Meta:
        verbose_name = "Emploi du temps"
        verbose_name_plural = "Emplois du temps"
