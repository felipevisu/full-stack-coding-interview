# Generated by Django 5.0.5 on 2024-05-07 16:18

import versatileimagefield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0002_photo_image_height_photo_image_ppoi_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photo',
            name='image_height',
        ),
        migrations.RemoveField(
            model_name='photo',
            name='image_ppoi',
        ),
        migrations.RemoveField(
            model_name='photo',
            name='image_width',
        ),
        migrations.AlterField(
            model_name='photo',
            name='image',
            field=versatileimagefield.fields.VersatileImageField(upload_to='photos/'),
        ),
    ]
