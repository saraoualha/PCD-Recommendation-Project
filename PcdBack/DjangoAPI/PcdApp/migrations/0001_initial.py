# Generated by Django 4.0.2 on 2022-04-11 16:57

import PcdApp.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Agenda',
            fields=[
                ('Id_Calend', models.AutoField(primary_key=True, serialize=False)),
                ('Date', models.CharField(max_length=10)),
                ('StartTime', models.CharField(max_length=5)),
                ('EndTime', models.CharField(max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='Recruteurs',
            fields=[
                ('Login', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('MDP', models.CharField(max_length=30)),
                ('Email', models.CharField(max_length=30, unique=True)),
                ('Nom', models.CharField(max_length=30)),
                ('Tel', models.CharField(max_length=10, unique=True)),
                ('Gouvernorat', models.CharField(max_length=30)),
                ('Adresse', models.CharField(max_length=30)),
                ('CodePostal', models.CharField(max_length=6)),
                ('Domaine', models.CharField(default='', max_length=30)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Students',
            fields=[
                ('Login', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('MDP', models.CharField(max_length=30)),
                ('Email', models.CharField(max_length=30, unique=True)),
                ('Nom', models.CharField(max_length=30)),
                ('Tel', models.CharField(max_length=10, unique=True)),
                ('Gouvernorat', models.CharField(max_length=30)),
                ('Adresse', models.CharField(max_length=30)),
                ('DDN', models.CharField(max_length=30)),
                ('Civ', models.CharField(max_length=30)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UploadFile',
            fields=[
                ('Id_PDF', models.AutoField(primary_key=True, serialize=False)),
                ('Login', models.CharField(max_length=30)),
                ('PDF', models.FileField(blank=True, null=True, upload_to=PcdApp.models.uploadFile)),
            ],
        ),
        migrations.CreateModel(
            name='UploadImage',
            fields=[
                ('Id_Image', models.AutoField(primary_key=True, serialize=False)),
                ('Login', models.CharField(max_length=30, unique=True)),
                ('Image', models.ImageField(blank=True, null=True, upload_to=PcdApp.models.uploadFile)),
            ],
        ),
        migrations.CreateModel(
            name='Competence',
            fields=[
                ('LoginStu', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='PcdApp.students')),
                ('Formation', models.CharField(max_length=250)),
                ('ExpProf', models.CharField(max_length=250)),
                ('Certif', models.CharField(max_length=250)),
                ('Lang', models.CharField(max_length=250)),
                ('Liens', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Cv',
            fields=[
                ('LoginStu', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='PcdApp.students')),
                ('InfoPer', models.TextField()),
                ('Compe', models.TextField()),
                ('InfoAdd', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='FeedBackRec',
            fields=[
                ('Login', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='PcdApp.recruteurs')),
                ('Email', models.CharField(max_length=30, unique=True)),
                ('Message', models.TextField()),
                ('Rating', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='InfoAdd',
            fields=[
                ('LoginStu', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='PcdApp.students')),
                ('CentreInt', models.CharField(max_length=250)),
                ('VieAsso', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='InfoPer',
            fields=[
                ('LoginStu', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='PcdApp.students')),
                ('Nom', models.CharField(max_length=30)),
                ('Email', models.CharField(max_length=30, unique=True)),
                ('Tel', models.CharField(max_length=10, unique=True)),
                ('Gouvernorat', models.CharField(max_length=30)),
                ('Adresse', models.CharField(max_length=30)),
                ('DDN', models.CharField(max_length=30)),
                ('Dom', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Sujet',
            fields=[
                ('Id_sujet', models.AutoField(primary_key=True, serialize=False)),
                ('Titre', models.TextField()),
                ('Description', models.TextField()),
                ('Domaine', models.TextField()),
                ('duree', models.TextField()),
                ('Tech', models.TextField()),
                ('paye', models.BooleanField(default=False)),
                ('Bin', models.BooleanField(default=False)),
                ('Att', models.BooleanField(default=False)),
                ('LoginRec', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='PcdApp.recruteurs')),
            ],
        ),
        migrations.CreateModel(
            name='Suit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('follow', models.BooleanField(blank=True)),
                ('recruteur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.recruteurs')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.students')),
            ],
            options={
                'unique_together': {('student', 'recruteur')},
            },
        ),
        migrations.AddField(
            model_name='students',
            name='follow',
            field=models.ManyToManyField(related_name='follows', through='PcdApp.Suit', to='PcdApp.Recruteurs'),
        ),
        migrations.CreateModel(
            name='InterSuj',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inter', models.BooleanField(blank=True, default=False)),                ('id_sujet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.sujet')),
                ('recruteur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.recruteurs')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.students')),
            ],
        ),
        migrations.AddField(
            model_name='agenda',
            name='LoginRec',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.recruteurs'),
        ),
        migrations.CreateModel(
            name='ChangePass',
            fields=[
                ('Id_MDP', models.AutoField(primary_key=True, serialize=False)),
                ('Login', models.CharField(max_length=30)),
                ('Email', models.CharField(max_length=30)),
                ('MDP', models.CharField(max_length=30)),
            ],
        ),
    ]
