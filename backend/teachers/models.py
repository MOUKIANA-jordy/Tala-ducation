from django.db import models
from django.conf import settings

class Matiere(models.Model):
    nom = models.CharField(max_length=100)
    coefficient = models.FloatField(default=1.0)

    def __str__(self):
        return self.nom

    class Meta:
        verbose_name = "Matière"
        verbose_name_plural = "Matières"


class Enseignant(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="enseignants"
    )
    matieres = models.ManyToManyField(
        Matiere,
        blank=True,
        related_name="enseignants"
    )

    def __str__(self):
        return self.user.get_full_name()

    class Meta:
        verbose_name = "Enseignant"
        verbose_name_plural = "Enseignants"
