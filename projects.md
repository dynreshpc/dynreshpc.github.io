---
title: Tutorials
description: Tutorials presented at DynResHPC events and related conferences.
aside: true
---

Tutorials given at DynResHPC workshops and partner conferences. For upcoming tutorials, materials may be linked below when available. For past tutorials, please contact the instructor if you need access to slides or other materials.

{% assign today = site.time | date: "%Y-%m-%d" %}

{% assign has_future = false %}
{% assign has_past = false %}
{% for tutorial in site.data.tutorials %}
  {% if tutorial.date_iso and tutorial.date_iso >= today %}
    {% assign has_future = true %}
  {% else %}
    {% assign has_past = true %}
  {% endif %}
{% endfor %}

{% if site.data.tutorials.size == 0 %}
<p><em>No tutorials listed yet.</em></p>
{% else %}

### Future tutorials

{% unless has_future %}
<p>No upcoming tutorials listed.</p>
{% endunless %}
{% if has_future %}
<ul class="tutorial-list">
  {% for tutorial in site.data.tutorials %}
    {% if tutorial.date_iso and tutorial.date_iso >= today %}
      {% include tutorial-list-item.html tutorial=tutorial %}
    {% endif %}
  {% endfor %}
</ul>
{% endif %}

### Past tutorials

{% unless has_past %}
<p>No past tutorials listed.</p>
{% endunless %}
{% if has_past %}
<ul class="tutorial-list">
  {% for tutorial in site.data.tutorials %}
    {% unless tutorial.date_iso and tutorial.date_iso >= today %}
      {% include tutorial-list-item.html tutorial=tutorial contact_note=true %}
    {% endunless %}
  {% endfor %}
</ul>
{% endif %}

{% endif %}
