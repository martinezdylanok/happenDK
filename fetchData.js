import parseEvents from "./parseEvents.js";

const fetchData = async (postRequest) => {
   try {
      const response = await postRequest();

      if (response.ok) {
         const data = await response.json();
         
         const events = parseEvents(data);
         
         return { raw: data, events };
      } else {
         console.error("Error!", response.status);
      }
   } catch (error) {
      console.error("Error:", error.message);
   }
}

export default fetchData;