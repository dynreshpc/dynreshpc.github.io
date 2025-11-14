---
title: Events
feature_image: "https://picsum.photos/1300/400?image=16"
---

<div class="timeline">
  {% for year_group in site.data.events %}
    <div class="timeline-year">
      <h2>{{ year_group.year }}</h2>
      <div class="timeline-events">
        {% for event in year_group.events %}
          <div class="timeline-event">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>{{ event.title }}</h3>
              <p class="event-date">
                <strong>{{ event.date }}</strong> at {{ event.time }}
              </p>
              <p class="event-location">📍 {{ event.location }}</p>
              <p>{{ event.description }}</p>
              {% if event.link %}
                <a href="{{ event.link }}" class="btn">Learn More</a>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>