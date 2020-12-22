import axios from "axios";

export default {
    //gets all discussions
    getDiscussions: function() {
        return axios.get("/api/discussions");
    },
    //gets discussion with a given id
    getDiscussions: function(id) {
        return axios.get("/api/discussions/" + id);
    },
    // Deletes the discussion with the given id
    deleteDiscussion: function(id) {
      return axios.delete("/api/discussions/" + id);
    },
    // Saves a discussion to the database
    saveDiscussion: function(discussionData) {
      return axios.post("/api/discussions", discussionData);
    }
  };
  