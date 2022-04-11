# Generated by Django 4.0.2 on 2022-04-11 10:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('PcdApp', '0009_recruteurs_domaine'),
    ]

    operations = [
        migrations.CreateModel(
            name='Suit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('follow', models.BooleanField(blank=True, default=False)),
                ('id_agenda', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.agenda')),
                ('id_sujet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.sujet')),
                ('recruteur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.recruteurs')),
            ],
        ),
        migrations.AddField(
            model_name='students',
            name='follow',
            field=models.ManyToManyField(related_name='follows', through='PcdApp.Suit', to='PcdApp.Recruteurs'),
        ),
        migrations.AddField(
            model_name='suit',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.students'),
        ),
    ]
