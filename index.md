---
#title: Dynamic Resources for HPC Consortium
feature_text: |
  ## DynResHPC
  ### Dynamic Resources for HPC Consortium
#feature_image: "https://picsum.photos/1300/400?image=16"
aside: true
---

<!--{% include figure.html image="/assets/logos/full-logo.png" %}-->

### The consortium will meet at UGA for its 5th workshop on dynamic resources
The Consortium is going to meet in the following in person event:
<div class="timeline">
  {% for year_group in site.data.events %}
    <div class="timeline-year">
      <div class="timeline-events">
        {% for event in year_group.events %}
          {% if event.id == "2026-grenoble" %}
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
          {% endif %}
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>

### Memories from the Annual Meeting at SC25
{% include figure.html image="/assets/images/group-picture-sc25.jpg" caption="DynResHPC group picture at SC25" %}

<hr> <!-- Horizontal line added here -->

### DynResHPC FAQ

#### What is DynResHPC?

The Dynamic Resources for HPC Consortium is a collaborative group focused on advancing dynamic resource management, malleable applications, and adaptive scheduling in High-Performance Computing (HPC) systems.

#### How did it get started?
The consortium originated from a series of informal discussions and small-scale collaborative events such as hackathons.
During SC24, we held the first official meeting of the consortium, marking the beginning of a coordinated community effort. Since then, we have been meeting monthly to share progress, exchange ideas, and plan joint activities.

#### Who is part of DynResHPC?
Anyone interested in dynamic resource management in HPC in any of its branches such as scheduling, runtimes, applications, API, monitoring, simulators, modeling...
DynResHPC is governed and led by an steering committee. 
DynResHPC also has organizational members, who are committed to providing resources to help support DynResHPC (staff time, hosting meetings, etc.)
Participants in DynResHPC primarily come from industry, academia, national labs and institutes, and HPC centers from around the world.

#### DynResHPC activities.
If you would like to participate, please sign up to the mailing list: Join our <a href="https://groups.google.com/g/dynres" target="_blank" rel="noopener noreferrer">community</a>.

#### What does DynResHPC do?
DynResHPC brings together experts and practitioners as a community, in events at major HPC-related conferences, standalone workshops, active technical working groups, and shares learnings through related sites.

#### What events does DynResHPC hold?
See our Events page for a list of upcoming and past events. Please contact us if you would be interested in holding an DynResHPC event in your area.
