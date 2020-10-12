import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Tracker } from "meteor/tracker";

/** Define a Mongo collection to hold the data. */
const SongPoint = new Mongo.Collection("SongPoint");

const Keyword = new SimpleSchema({
  phrase: {
    type: String,
    label: "The phrase/word that is important",
  },
  score: {
    type: Number,
    label: "Keyword importance score calculated",
  },
});
const Coords = new SimpleSchema({
  lng: {
    type: Number,

    min: -180,
    max: 180,
  },
  lat: {
    type: Number,

    min: -180,
    max: 180,
  },
});

/** Define a schema to specify the structure of each document in the collection. */
const SongPointSchema = new SimpleSchema(
  {
    rootDate: {
      type: Date,
      label: "The root date range the song falls under",
    },
    title: {
      type: String,
      label: "The song title",
    },
    url: {
      type: String,
      label: "The url to the lyrics of the song on Genius",
    },
    recordLoc: {
      type: String,
      label: "Recording location posted on Genius",
    },
    image: {
      type: String,
      label: "Image cover of the song/album",
      optional: true
    },
    pubDate: {
      type: Date,
      label: "Date the song was released",
    },

    lyrics: {
      type: String,
      label: "Lyrics of the song",
      optional: true
    },

    keywords: {
      type: Array,
      label: "Keywords found in date range",
      defaultValue: [],
    },
    "keywords.$": Keyword,
    location: {
      type: Coords,
      label: "Coordinates of location where song was recorded",
    },
  },
  { tracker: Tracker }
);

/** Attach this schema to the collection. */
SongPoint.attachSchema(SongPointSchema);

/** Make the collection and schema available to other code. */
export { SongPoint, SongPointSchema };
