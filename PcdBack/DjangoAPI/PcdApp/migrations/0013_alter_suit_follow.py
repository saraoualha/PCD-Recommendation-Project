# Generated by Django 4.0.2 on 2022-04-11 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PcdApp', '0012_alter_suit_unique_together'),
    ]

    operations = [
        migrations.AlterField(
            model_name='suit',
            name='follow',
            field=models.BooleanField(blank=True),
        ),
    ]
