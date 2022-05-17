setTimeout(function() {
  image("treason", "logo.png");
  onEvent("treason", "click", function( ) {
    playSpeech("We've been trying to reach you concerning your vehicle's extended warranty. You should've received a notice in the mail about your car's extended warranty eligibility. Since we've not gotten a response, we're giving you a final courtesy warning before we close out your file. Please type in an address that we can reach you at before we close out your file", "female", "English");
  });
}, 10000);
setTimeout(function() {
  textLabel("scam", "This has gotta be the most well known scam because people get calls like these all the time. Unfortunately its not the only scam people get through the phone.");
}, 20000);
