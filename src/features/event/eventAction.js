import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

export const createEvent = (event) => {
  console.log("ACTION ",event)
  return {
    type: CREATE_EVENT,
    payload: {
      event
    }
  };
};

export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  };
};

export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};
