from django.db import models

class Classe(models.Model):
    nom = models.CharField(max_length=50)
    niveau = models.CharField(max_length=50)
    annee_scolaire = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nom} - {self.niveau} ({self.annee_scolaire})"

    class Meta:
        verbose_name = "Classe"
        verbose_name_plural = "Classes"
        ordering = ['niveau', 'nom']
