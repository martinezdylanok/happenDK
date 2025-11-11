const createEventElement = (result) => {
   const eventListDiv = document.querySelector(".event-list");
   
   result.events.forEach((event) => {
      const eventDiv = document.createElement("div");
      eventDiv.className = "event-list__event";
      
      if (event.image) {
         const eventImage = document.createElement("img");
         eventImage.className = "event__image";
         eventImage.src = event.image;
         eventImage.alt = event.title;

         if (event.url) {
            const eventImageLink = document.createElement("a");
            eventImageLink.className = "event__image-link";
            eventImageLink.href = event.url;
            eventImageLink.appendChild(eventImage);
            eventImageLink.target = "_blank";
            eventDiv.appendChild(eventImageLink);
         } else {
            eventDiv.appendChild(eventImage);
         };
      }
      
      const eventTitle = document.createElement("h2");
      eventTitle.className = "event__title";
      eventTitle.textContent = event.title;
      eventDiv.appendChild(eventTitle);
      
      const eventDescription = document.createElement("p");
      eventDescription.className = "event__description";
      const eventDescriptionText = event.description;
      console.log(eventDescriptionText);
      const eventDescriptionTextLength = eventDescriptionText.length
      console.log(eventDescriptionTextLength);
      if (eventDescriptionText.length > 300) {
         const length = 300;
         let truncatedText = eventDescriptionText.substring(0, length) + "...";
         eventDescription.textContent = truncatedText;
      } else {
         eventDescription.textContent = eventDescriptionText;
      }
      
      eventDiv.appendChild(eventDescription);
      
      const eventDate = document.createElement("p");
      eventDate.className = "event__date";
      let dateText = "";
      const start = new Date(event.startDate).toLocaleDateString('en-US', {
         year: 'numeric', 
         month: 'short', 
         day: 'numeric' 
      });
      const end = new Date(event.endDate).toLocaleDateString('en-US', {
         year: 'numeric', 
         month: 'short', 
         day: 'numeric' 
      });
      dateText = `Date: ${start} - ${end}`;
      eventDate.innerHTML = dateText;
      eventDiv.appendChild(eventDate);
      
      if (event.url) {
         const eventLink = document.createElement("a");
         eventLink.className = "event__link";
         eventLink.href = event.url;
         eventLink.textContent = "View Event";
         eventLink.target = "_blank";
         eventDiv.appendChild(eventLink);
      }

      eventListDiv.appendChild(eventDiv);
   });
};

export default createEventElement;