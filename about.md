---
title: About DynResHPC
feature_image: "https://picsum.photos/1300/400?image=16"
---

The Consortium is going to meet in the following in person event:
<div class="timeline">
  {% for year_group in site.data.events %}
    <div class="timeline-year">
      <h2>{{ year_group.year }}</h2>
      <div class="timeline-events">
        {% for event in year_group.events %}
          {% if event.id == "grenoble-2026" %}
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

The Consortium is governed by:

<div style="display:flex;flex-wrap:wrap;gap:1rem;margin:1rem 0;">
  <div style="flex:1 1 220px;border:1px solid #e2e8f0;border-radius:8px;padding:1rem;box-shadow:0 1px 2px rgba(0,0,0,0.05);">
    <div style="font-size:1.5rem">👥</div>
    <h4 style="margin:.25rem 0">General Assembly</h4>
    <p style="margin:0">Composed of all members; primary decision‑making body.</p>
  </div>

  <div style="flex:1 1 220px;border:1px solid #e2e8f0;border-radius:8px;padding:1rem;box-shadow:0 1px 2px rgba(0,0,0,0.05);">
    <div style="font-size:1.5rem">🧭</div>
    <h4 style="margin:.25rem 0">Advisory Board</h4>
    <p style="margin:0">Up to one representative per participating institution, providing guidance.</p>
  </div>

  <div style="flex:1 1 220px;border:1px solid #e2e8f0;border-radius:8px;padding:1rem;box-shadow:0 1px 2px rgba(0,0,0,0.05);">
    <div style="font-size:1.5rem">⚙️</div>
    <h4 style="margin:.25rem 0">Leadership Board</h4>
    <p style="margin:0">Executes the Consortium’s guidelines and decisions.</p>
  </div>
</div>

## Leadership Board

{% include headshot.html image="/assets/headshots/siserte.jpg" caption="Co-chair <br> Sergio Iserte (BSC)" width="200" height="200" %}
{% include headshot.html image="/assets/headshots/martin_sc.jpeg" caption="Co-chair <br> Martin Schreiber (UGA)" width="200" height="200" %}
{% include headshot.html image="/assets/headshots/martini.jpeg" caption="Communication Officer <br> Iker Martín-Álvarez (UJI)" width="200" height="200" %}

## Advisory Board

The advisory board is being decided, and will be publish after being elected.
<!--
{% include headshot.html image="https://picsum.photos/600/800?image=49" caption="Martin Schultz (TUM) - <em>President</em>" width="200" height="200" %}
{% include headshot.html image="https://picsum.photos/600/800?image=49" caption="Antonio J. Peña (BSC) - <em>Vice President</em>" width="200" height="200" %}
{% include headshot.html image="https://picsum.photos/600/800?image=49" caption="Thomas Gruber (NHR@FAU)" width="200" height="200" %}
{% include headshot.html image="https://picsum.photos/600/800?image=49" caption="Ralph Castain (PMIx)" width="200" height="200" %}
{% include headshot.html image="https://picsum.photos/600/800?image=49" caption="Jesús Carretero (UC3M)" width="200" height="200" %}
{% include headshot.html image="/assets/headshots/jaliaga.jpg" caption="José I. Aliaga (UJI)" width="200" height="200" %}
-->

## Consortium Statutes
<article>
  <h3>1. Purpose</h3>
  <p>
    1. The DynResHPC Consortium (hereinafter, "the Consortium") is established to foster collaboration, promote knowledge exchange, and support joint initiatives in dynamic resource management and related research and application domains.
  </p>
  <p>
    2. The Consortium serves as a non-profit, collaborative platform for its members and does not pursue commercial objectives.
  </p>
</article>

<article>
  <h3>2. Membership</h3>
  <p>
    1. Membership in the Consortium is open to individuals and institutions whose activities and objectives are aligned with the purpose of the Consortium.
  </p>
  <p>
    2. Members are expected to actively contribute to the Consortium’s activities, including but not limited to meetings, working groups, and joint initiatives.
  </p>
  <p>
    3. Applications for membership shall be submitted informally to the Leadership Board. Decisions on membership applications shall be taken by the Leadership Board during its regular monthly meetings.
  </p>
  <p>
    4. The Leadership Board may define additional non-binding guidelines regarding expectations for active participation.
  </p>
</article>

<article>
  <h3>3. Governance Structure</h3>
  <p>
    1. The Consortium is governed by the following bodies:
  </p>
  <ul>
    <li><strong>General Assembly</strong></li>
    <li><strong>Advisory Board</strong></li>
    <li><strong>Leadership Board</strong></li>
  </ul>
  <p>
    2. Each governing body shall act within the scope of its responsibilities as defined in these statutes.
  </p>
</article>

<article>
  <h3>4. General Assembly</h3>
  <p>
    1. The General Assembly (GA) is the highest decision-making body of the Consortium and consists of all members.
  </p>
  <p>
    2. The GA shall convene once per calendar year. Participation is restricted to members of the Consortium, unless an exception is granted by the Leadership Board.
  </p>
  <p>
    3. Members of the Advisory Board shall be invited to the GA by the Leadership Board.
  </p>
  <p>
    4. The responsibilities of the GA include:
  </p>
  <ul>
    <li>electing the members of the Leadership Board;</li>
    <li>electing members of the Advisory Board;</li>
    <li>approving amendments to the statutes;</li>
    <li>providing strategic direction to the Consortium.</li>
  </ul>
  <p>
    5. Decisions of the GA shall be taken by consensus where possible, or otherwise by simple majority vote, in accordance with Article 8.
  </p>
</article>

<article>
  <h3>5. Advisory Board</h3>
  <p>
    1. The Advisory Board (AB) provides strategic guidance, institutional perspectives, and non-binding recommendations to the Consortium. It has an advisory role only and is not responsible for day-to-day operations.
  </p>
  <p>
    2. The AB shall be composed of at most one representative per participating institution, with a maximum of five (5) seats.
  </p>
  <p>
    3. Members of the AB shall be elected by the General Assembly for a term of two (2) years. Upon expiration of a term, the respective seat shall be opened for election at the next General Assembly.
  </p>
  <p>
    4. Nominations for the Advisory Board must be submitted to the Leadership Board no later than four (4) weeks prior to the General Assembly.
  </p>
  <p>
    5. The composition of the AB shall, where possible, reflect diversity with respect to geography, gender, and disciplinary background related to the Consortium’s purpose, and include internationally recognized experts.
  </p>
  <p>
    6. Members of the AB are expected to participate in the annual General Assembly meeting.
  </p>
</article>

<article>
  <h3>6. Leadership Board</h3>
  <p>
    1. The Leadership Board (LB) is responsible for the operational management of the Consortium and the execution of its activities.
  </p>
  <p>
    2. The LB shall act in accordance with the decisions and guidelines of the General Assembly and shall take into account the recommendations of the Advisory Board.
  </p>
  <p>
    3. The LB shall consist of three (3) to four (4) members, elected by the General Assembly for a term of two (2) years.
  </p>
  <p>
    4. The LB shall organize and chair regular meetings, including monthly meetings and the General Assembly, and shall be responsible for conducting voting procedures as required under these statutes.
  </p>
</article>

<article>
  <h3>7. Meetings and Working Groups</h3>
  <p>
    1. Regular monthly meetings shall be organized and convened by the Leadership Board to address ongoing activities, coordination matters, and operational decisions.
  </p>
  <p>
    2. Meetings shall be held online unless the Leadership Board decides to hold them in person or in hybrid format, typically in conjunction with major conferences (e.g., SC, ISC) or specific events such as workshops.
  </p>
  <p>
    3. The Consortium may establish temporary or permanent working groups to address specific tasks, projects, or thematic areas. Working groups shall operate under the supervision of the Leadership Board and report their activities as requested.
  </p>
</article>

<article>
  <h3>8. Voting</h3>
  <p>
    1. For all decisions subject to voting, <i>each institution represented in the Consortium shall have one (1) vote</i>. The institutional representative shall be designated by the institution as part of its membership.
  </p>
  <p>
    2. Unless otherwise specified in these statutes, decisions shall be adopted by a simple majority, defined as at least <strong>fifty percent (50%)</strong> of the votes cast.
  </p>
  <p>
    3. Voting procedures shall be organized and administered by the Leadership Board.
  </p>
</article>

<article>
  <h3>9. Amendments</h3>
  <p>
    1. Amendments to these statutes may be proposed by any member of the Consortium.
  </p>
  <p>
    2. Amendments shall be adopted by a simple majority vote of all members and do not require a regular meeting.
  </p>
  <p>
    3. Adopted amendments shall enter into force immediately unless otherwise specified by the amendment.
  </p>
</article>
  </p>
</article>
