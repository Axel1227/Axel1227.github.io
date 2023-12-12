import{_ as s,o as i,c as a,R as n}from"./chunks/framework.UjU5Kp2a.js";const p="/assets/pgadmin._xhW6X8m.png",l="/assets/pgadmin-general.POS7cRf_.png",t="/assets/pgadmin-connection.aszLx8JV.png",e="/assets/pgadmin-ui.lVdmnixX.png",A=JSON.parse('{"title":"Docker Compose Postgres + pgAdmin","description":"","frontmatter":{},"headers":[],"relativePath":"docker/postgres.md","filePath":"docker/postgres.md","lastUpdated":1702401442000}'),h={name:"docker/postgres.md"},k=n(`<h1 id="docker-compose-postgres-pgadmin" tabindex="-1">Docker Compose Postgres + pgAdmin <a class="header-anchor" href="#docker-compose-postgres-pgadmin" aria-label="Permalink to &quot;Docker Compose Postgres + pgAdmin&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">建立時間：2023/12/12</p><p>用 Docker Compose 建立 Postgres SQL + pgAdmin GUI 微服務</p></div><h2 id="docker-compose" tabindex="-1">📌 Docker Compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;:pushpin: Docker Compose&quot;">​</a></h2><ul><li>建立 docker-compose.yaml 檔</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  postgres</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgres</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Pull postgres Image</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgres</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">POSTGRES_DB=postgres</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 預設Db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">POSTGRES_USER=postgres</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 登入帳號</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">POSTGRES_PASSWORD=000000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 登入密碼</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./data:/var/lib/postgresql/data</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 資料存放路徑</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5432:5432&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Port 本機5432:服務5432</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pgadmin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dpage/pgadmin4:latest</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Pull pgadmin4 Image</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pgadmin</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PGADMIN_DEFAULT_EMAIL=example@gmail.com</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Login Email</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PGADMIN_DEFAULT_PASSWORD=000000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Login Password</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PGADMIN_LISTEN_PORT=80</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 80 Port</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5050:80&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Port 本機5050:服務80</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./data:/var/lib/pgadmin</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 資料存放路徑</span></span></code></pre></div><h2 id="進入-pgadmin-gui-連線到-postgres" tabindex="-1">📌 進入 pgAdmin GUI 連線到 Postgres <a class="header-anchor" href="#進入-pgadmin-gui-連線到-postgres" aria-label="Permalink to &quot;:pushpin: 進入 pgAdmin GUI 連線到 Postgres&quot;">​</a></h2><ul><li>拉取 Image、啟動服務</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 拉取 docker-compose.yaml 內的 兩支服務</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 啟動服務</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看 Container</span></span></code></pre></div><ul><li><p><code>http://localhost:5050</code> (Login: <code>example@gmail.com</code> / <code>000000</code>) <img src="`+p+'" alt="pgadmin"></p></li><li><p>Add New Server</p></li><li><p>General =&gt; Name: postgres</p></li><li><p>Connection =&gt;</p><ul><li>Host name/address: postgres</li><li>Port: 5432</li><li>Username: postgres</li><li>Password: 000000 <img src="'+l+'" alt="pgadmin-general"><img src="'+t+'" alt="pgadmin-connection"><img src="'+e+'" alt="pgadmin-ui"></li></ul></li></ul>',9),r=[k];function o(d,g,E,c,m,y){return i(),a("div",null,r)}const D=s(h,[["render",o]]);export{A as __pageData,D as default};
