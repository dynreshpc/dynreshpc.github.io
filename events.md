---
title: Events
feature_image: "https://picsum.photos/1300/400?image=16"
---

<div class="timeline">
  {% for year_group in site.data.events %}
    {% if year_group.events %}
      <div class="timeline-year">
        {% if year_group.year %}<h2>{{ year_group.year }}</h2>{% endif %}
        <div class="timeline-events">
          {% for event in year_group.events %}
            <div class="timeline-event">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                {% if event.title %}<h3>{{ event.title }}</h3>{% endif %}

                {% if event.date or event.time %}
                  <p class="event-date">
                    {% if event.date %}<strong>{{ event.date }}</strong>{% endif %}
                    {% if event.time %}
                      {% if event.date %} at {% endif %}{{ event.time }}
                    {% endif %}
                  </p>
                {% endif %}

                {% if event.location %}
                  <p class="event-location">📍 {{ event.location }}</p>
                {% endif %}

                {% if event.description %}
                  <p>{{ event.description }}</p>
                {% endif %}

                {% if event.link %}
                  <p>
                    <a href="{{ event.link }}" class="btn">
                      {% if event.link_text %}{{ event.link_text }}{% else %}Learn more{% endif %}
                    </a>
                  </p>
                {% endif %}
              </div>
            </div>
          {% endfor %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>