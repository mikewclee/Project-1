$(document).ready(function() {
​
    //ALL JAVASCRIPT THAT IS USED IN SEARCH PAGE AND RESULTS PAGE WAS REMOVED
​
    var apiKey = "9bu5bi3vaKYgYQt7Cj4pxdYFN8pkwsL9zSIiRFEd";
​
    var queryURL = "";
    var resultsClass = $(".results");
​
    var detailSidebar = $("#detailSidebar");
    var detailMain = $("#detailMain");
    var detailImageArea = $("#detailImages");
​
    //variables used for loops --- i, j, k, l, m
​
    //CONFIRMS THAT detailMain is accessible inside a function
    var testingButton = $("<button>").text("Testing").appendTo(detailMain);
    testingButton.click(function() {
        detailMain.empty();
        detailSidebar.empty();
​
        var apiKey = "9bu5bi3vaKYgYQt7Cj4pxdYFN8pkwsL9zSIiRFEd";
​
        var queryURL = "https://developer.nps.gov/api/v1/parks?api_key="  + apiKey + "&stateCode=" + "NY";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(data) {
            console.log(data);
            console.log(data.data[0].fullName);
​
            var detailsParkName = $("<h2>").text(data.data[0].fullName).attr("id","detailsParkName").appendTo(detailMain);
            var detailsDescription = $("<h4>").text(data.data[0].description).appendTo(detailMain);
​
            var detailActivitiesArea = $("<div class='pure-u-1 pure-u-sm-1-3' id='detailActivitiesArea'>").appendTo(detailMain); 
            var detailsActivitiesSubheading = $("<h4 class='detailCardSubheading'>").text("Activities").appendTo(detailActivitiesArea);
            for (var j = 0; j < (data.data[0].activities).length; j++) { 
                var detailsActivitiesParagraph = $("<p>").text(data.data[0].activities[j].name).appendTo(detailActivitiesArea);
            }
​
            var detailTopicsArea = $("<div class='pure-u-1 pure-u-sm-1-3' id='detailTopicsArea'>").appendTo(detailMain);  
            var detailsTopicsSubheading = $("<h4 class='detailCardSubheading'>").text("Topics").appendTo(detailTopicsArea);
            for (var k = 0; k < (data.data[0].topics).length; k++) { 
                var detailsTopicsParagraph = $("<p>").text(data.data[0].topics[k].name).appendTo(detailTopicsArea);
            }    
        
            var detailsAddressSubheading = $("<h4>").text("Address").appendTo(detailSidebar);
            var detailsAddress1 = $("<p>").text(data.data[0].addresses[0].line2).appendTo(detailSidebar);
            var detailsAddress2 = $("<p>").text(data.data[0].addresses[0].line3).appendTo(detailSidebar);
            var detailsCityStateZip = $("<p>").appendTo(detailSidebar)
                                .text(data.data[0].addresses[0].city + ", " + 
                                      data.data[0].addresses[0].stateCode + 
                                      data.data[0].addresses[0].postalCode);
            var detailsDirectionsText = $("<p><a href='data.data[0].directionsUrl'>").text(data.data[0].directionsUrl)                        
        
            var detailsContactsSubheading = $("<h4>").text("Contacts").appendTo(detailSidebar);
            var detailsPhone = $("<p>").text("Phone: " + data.data[0].contacts.phoneNumbers[0].phoneNumber[0] +
                                                         data.data[0].contacts.phoneNumbers[0].phoneNumber[1] +
                                                         data.data[0].contacts.phoneNumbers[0].phoneNumber[2] + " " +
                                                         data.data[0].contacts.phoneNumbers[0].phoneNumber[3] +
                                                         data.data[0].contacts.phoneNumbers[0].phoneNumber[4] +
                                                         data.data[0].contacts.phoneNumbers[0].phoneNumber[5] + "-" +
                                                         data.data[0].contacts.phoneNumbers[0].phoneNumber[6] +
                                                         data.data[0].contacts.phoneNumbers[0].phoneNumber[7] +
                                                         data.data[0].contacts.phoneNumbers[0].phoneNumber[8] +
                                                         data.data[0].contacts.phoneNumbers[0].phoneNumber[9]).appendTo(detailSidebar);
            var detailsEmail = $("<p><a href='data.data[0].contacts.emailAddresses[0].emailAddress'>").text("Email: " + data.data[0].contacts.emailAddresses[0].emailAddress).appendTo(detailSidebar);  
            var detailsWebsite = $("<p><a href='data.data[0].url)'>").text("Website: " + data.data[0].url).appendTo(detailSidebar);
​
            var detailsFee = $("<p>").text("Entrance Fee: " + data.data[0].operatingHours[0].standardHours)
            
            var detailsHours = $("<h4>").text("Operating Hours").appendTo(detailSidebar);
            var detailsSunday = $("<p>").text("Sunday: " + data.data[0].operatingHours[0].standardHours.sunday).appendTo(detailSidebar);
            var detailsMonday = $("<p>").text("Monday: " + data.data[0].operatingHours[0].standardHours.monday).appendTo(detailSidebar);
            var detailsTuesday = $("<p>").text("Tuesday: " + data.data[0].operatingHours[0].standardHours.tuesday).appendTo(detailSidebar);
            var detailsWednesday = $("<p>").text("Wednesday: " + data.data[0].operatingHours[0].standardHours.wednesday).appendTo(detailSidebar);
            var detailsThursday = $("<p>").text("Thursday: " + data.data[0].operatingHours[0].standardHours.thursday).appendTo(detailSidebar);
            var detailsFriday = $("<p>").text("Friday: " + data.data[0].operatingHours[0].standardHours.friday).appendTo(detailSidebar);
            var detailsSaturday = $("<p>").text("Saturday: " + data.data[0].operatingHours[0].standardHours.saturday).appendTo(detailSidebar);            
​
            for (var m = 1; m < (data.data[0].images).length; m++) { 
                var detailImages = $("<img class='detailImageItem'>").attr("src",data.data[0].images[m].url)
                                             .attr("alt",data.data[0].images[m].altText).appendTo(detailImageArea);
            }   
        });    
    });
​
});