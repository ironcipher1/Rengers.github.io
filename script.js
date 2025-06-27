const messages =[
    "Hafsat kece muradina",
    "indan zan sake haihuwa, zaan roki allah ya hadani dake tun daga haihuwa",
    "soyyarki tafi duk wani zinare a idona",
    "Hafsat, zuciyata na bugawa da sunanki, kamar kida mai daɗi da ba ya yankewa.",
  "Idan na kalleki, duniya na canzawa, tamkar hasken alfijir bayan dare mai duhu.",
  "Soyayyarki ta zama jinin jikina – ba zan iya rayuwa ba tare da ke ba.",
  "Kowace rana da ta zo, ina jin kamar sabuwar soyayya na ƙara tsiro cikin zuciyata.",
  "Kin zama mafarki a dare, mafita a rana, da mafaka a damuwa.",
  "Kalaman ki na sa zuciyata ta natsu, tamkar ruwa mai sanyaya zafi.",
  "Idan har akwai gaskiya a soyayya, to namu shi ne misalin gaskiyar soyayya.",
  "Ba na fatan wani abu daga rayuwa face kasancewarki a gefena har abada.",
  "Soyayyarki tamkar littafi ne – kullum ina karanta sabuwar shafi mai daɗi.",
  "Duniya na iya canzawa, amma soyayyata gare ki ba za ta gushe ba har abada.",
      "Hello world!",
      "Keep smiling 😊",
      "Never give up 💪",
      "Life is beautiful 🌈",
      "You are awesome! 🚀"]
  
  
  
  
  document.getElementById("btnl").onclick = function(){
  let x = window.prompt("kina bukatan hotona Yes or no")
  if (x === "yes" || x == "YES") { 
    alert("dagaske,")
   let y = window.prompt("kice i love you")
    if(y ==="ilove you" || y ==="i love you" || y ==="ILOVE YOU")
        alert("Nima ilove you hafsat beautiful girl in the world ", window.location.href="login.html")
    else{
        alert("bazan nu namiki bah sai kin fada ")
    }
    
  } else {
    window.prompt("meyasa bakyason ganin hoton").toUpperCase()
    alert("Shikenan dama basona kike  bah nagode Allah yabaki wanda kike so") 
  }}


document.getElementById("btn").onclick = function(){
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("loveMessage").innerText = messages[randomIndex]
}


/// love is blime thank love 

