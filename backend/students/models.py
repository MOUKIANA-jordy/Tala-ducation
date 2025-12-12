from django.db import models
from django.conf import settings
from schools.models import Classe

class Eleve(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="eleves"
    )
    classe = models.ForeignKey(
        Classe,
        on_delete=models.SET_NULL,
        null=True,
        related_name="eleves"
    )
    matricule = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"{self.user.get_full_name()} ({self.matricule})"

    class Meta:
        verbose_name = "Élève"
        verbose_name_plural = "Élèves"
        ordering = ['user__last_name', 'user__first_name']


class ParentEleve(models.Model):
    parent = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        limit_choices_to={'role': 'parent'},
        related_name="enfants"
    )
    eleve = models.ForeignKey(
        Eleve,
        on_delete=models.CASCADE,
        related_name="parents"
    )

    def __str__(self):
        return f"{self.parent.username} -> {self.eleve.user.get_full_name()}"

    class Meta:
        verbose_name = "Parent d'élève"
        verbose_name_plural = "Parents d'élèves"
        unique_together = ('parent', 'eleve')  # Empêche un doublon parent-éleve
