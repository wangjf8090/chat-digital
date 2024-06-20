# -*- coding:utf-8 -*-
"""
@author: wangjf
@date:20/06/2024
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.chat, name='chat'),
]
