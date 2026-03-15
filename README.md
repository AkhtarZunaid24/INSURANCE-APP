<h1>Readme</h1>
<br>
<h1><B>AI POWERED SAFETY NET FOR INDIA'S DELIVERY PARTNERS</B></h1>
<b>Problem Statement:</b> <p>Due causes of external disruptions our delivery partners loose 20-30% of their monthly income with zero financial safety net. </p><br>
<b>Our Solution :</b><p>An AI enabled insurance platform that provides automated payouts for lost income based on real-time data, ensuring no gig workers suffer alone. </p><br>
<H2><B>Targeted Persona : The Q-commerce "Flash" Rider</B></H2><p>We have chosen to focus on exclusively on Quick commerce segment</p>
<ul><li>
  <p><b>Primary Platform:</b> Zepto, Blinkit, Swiggy, Zomato, Instamart etc.</p>
</li>
  <li>
    <p><b>Why this Persona ? </b>These workers on ultra-tight 10-15 minutes delivery window. Heavy rains or severe AQI doesn't just slow down; it makes specific job(high speed delivery) physically impossible or unsafe, leading to immediate "off-duty" status and lost wages. </p>
  </li>
</ul>
<hr>
<h2><b>Understanding Parameters:</b></h2><p>Building a parametric insurance system for gig workers that triggers automatic payouts due to an external event instead of manual claim.</p>
<table>
  <thead>
    <th>Event</th>
    <th>Effect</th>
  </thead>
  <tbody>
    <tr>
    <td>Heavy Rain</td><td>Worker cannot deliver</td></tr>
    <tr><td>Flood</td><td>Delivery area blocked</td></tr>
    <tr><td>Pollution</td><td>Outdoor work stopped</td></tr>
    <tr><td>Curfew</td><td>Delivery Impossible</td></tr>
  </tbody>
</table>
<p>When these things happen -> AI detects the event -> system triggers payout automatically.</p>
<p>
  Important rule :
  <ul>
    <li>
      Insurance for income loss only
    </li>
    <li>
      Weekly premium pricing 
    </li>
  </ul>
</p>
<h3><b><u>Parametric triggers</u></b></h3>
<p>Triggers automatically start the claim. Runs every 10-15 mins<br> Example:</p>
<table>
  <thead>
    <th>Trigger</th><th>API Source</th>
  </thead>
  <tbody>
    <tr><td>Rain > 50mm</td><td>Weather API</td></tr>
    <tr><td>Temperature > 42&degC</td><td>Weather API</td></tr>
  <tr><td>AQI > 350</td><td>Pollution API</td></tr>
  <tr><td>City Curfew</td><td>Admin Trigger</td></tr>
  </tbody>
</table>
<p>If a condition is satisfied then payout is triggered </p>
Fetch weather API
->
Check rainfall
->
Compare with threshold
->
Trigger claim automatically
<hr>
<h2><b>System Architecture :</b></h2>
<p>User App => HTML, CSS, JS, REACT</p>
<p>Backend API => Python </p>
<p>AI services => Premium predicton + Fraud Detection</p>
<p>Database => PostgreSQL</p>
<p>External API<br>Weather API<br>Pollution API<br>Payment API</p>
<hr>
<h2><b>Features to Build: </b></h2>
<p><h3>Worker Registration</h3>
User enters 
<ul>
  <li>Name</li>
  <li>Delivery Platform</li>
  <li>City</li>
  <li>Usual working hours</li>
  <li>Average weekly income</li>
</ul>
Output : Worker profile created</p>
<p><h3>Risk Profiling</h3>
AI calculates risk based on:
<ul>
  <li>City</li>
  <li>Weather history</li>
  <li>Pollution level</li>
  <li>Disruption Frequency</li>
</ul>
<p>Example : 
   Risk score = weather risk + pollution risk + zone risk</p>
<p><h3>Weekly Premium Calculation :</h3>
Example formula :
<p>Weekly Premium = Base Rate x Risk Score </p>
<p>Example: 
<table>
  <thead>
    <th>Worker</th><th>Risk Score</th><th>Premium</th>
  </thead>
  <tbody>
    <tr><td>Delhi Rider</td><td>High</td><td>80 INR/wweek</td></tr>
    <tr><td>Bangalore Rider</td><td>Medium</td><td>50 INR/week</td></tr>
    <tr><td>Pune Rider</td><td>Low</td><td>35 INR/week</td></tr>
  </tbody>
</table>
Use of ML model 
</p>
<p><h3>Fraud Detection (AI)</h3>
AI models detect suspicious claims such as 
  <ul>
    <li>GPS spoofing</li>
    <li>Duplicate claims</li>
    <li>inactive workers claiming payouts</li>
  </ul><p>
Examples of Fraud :
<table>
  <thead>
    <th>Fraud type</th><th>Detection</th>
  </thead>
  <tbody>
    <tr><td>Fake Location </td><td>GPS mismatch</td></tr>
    <tr><td>Claim without activity</td><td>no delivery logs</td></tr>
    <tr><td>Duplicate claim</td><td>same event repeated</td></tr>
  </tbody>
</table></p>
Use :
<ul>
  <li>Anomaly Detection</li>
<li>Isolation Forest</li>
<li>Random Forest</li>
</ul></p>
<h3><b>Instant Payout System</b></h3>
<p>Approved claims are instantly processed using a simulated payment gateway. Workers receive compensation for lost earnings without manual paperwork.</p>
<hr>
<h2><b>Expected Impact: </b></h2>
<p>This platform creates a safety net for gig workers by protecting their income during uncontrollable external disruptions.
By automating insuarance payouts using AI and parametric triggers, we enable faster, fairer, and more accessible insurance for gig economy.</p>



















