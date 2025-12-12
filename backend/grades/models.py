from django.db import models
from students.models import Eleve
from teachers.models import Matiere
from courses.models import Devoir

class Note(models.Model):
    eleve = models.ForeignKey(
        Eleve,
        on_delete=models.CASCADE,
        related_name="notes"
    )
    matiere = models.ForeignKey(
        Matiere,
        on_delete=models.CASCADE,
        related_name="notes"
    )
    devoir = models.ForeignKey(
        Devoir,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="notes"
    )
    valeur = models.FloatField()
    coef = models.FloatField(default=1.0)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.eleve.user.get_full_name()} - {self.valeur} ({self.matiere.nom})"

    class Meta:
        verbose_name = "Note"
        verbose_name_plural = "Notes"


class Bulletin(models.Model):
    eleve = models.ForeignKey(
        Eleve,
        on_delete=models.CASCADE,
        related_name="bulletins"
    )
    trimestre = models.IntegerField()
    moyenne_generale = models.FloatField(default=0.0)
    details = models.JSONField(blank=True, null=True)
    date_generation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.eleve.user.get_full_name()} - Trim {self.trimestre}"

    class Meta:
        verbose_name = "Bulletin"
        verbose_name_plural = "Bulletins"
