import { photos } from './archive.js';

export const hisVoicePage = {
  kicker: 'His Voice',
  title: 'His Voice',
  lede: 'The district still knows the number.',
  portrait: photos.portraitShop,
};

export const voiceChapters = [
  {
    id: 'beginning',
    title: 'The Beginning',
    note: 'Nineteen. The iron shop. The first night the car was not his.',
    video: {
      src: 'https://www.youtube.com/embed/59TbIQ8LjwM',
      title: 'Biography on film',
    },
    quote: null,
    needed: [
      {
        type: 'audio',
        file: 'public/archive/media/voice-beginning.mp3',
        note: 'Audio from an interview about how the work started.',
      },
      {
        type: 'quote',
        file: 'src/data/hisVoice.js → beginning.quote',
        note: 'One verified sentence in his words. Do not invent.',
      },
    ],
  },
  {
    id: 'service',
    title: 'The Service',
    note: 'If you call, he comes.',
    video: {
      src: 'https://www.youtube.com/embed/JdfTO_eifA4',
      title: 'Service on the road',
    },
    quote: null,
    needed: [
      {
        type: 'audio',
        file: 'public/archive/media/voice-service.mp3',
        note: 'Him speaking about the night work.',
      },
      {
        type: 'quote',
        file: 'src/data/hisVoice.js → service.quote',
        note: 'Verified line about the service.',
      },
    ],
  },
  {
    id: 'ambassador',
    title: 'The Ambassador',
    note: 'Before the ambulance, the car.',
    video: {
      src: 'https://www.youtube.com/embed/5JXWzgQVEw0',
      title: 'Behindwoods feature',
    },
    quote: null,
    needed: [
      {
        type: 'audio',
        file: 'public/archive/media/voice-ambassador.mp3',
        note: 'Him speaking about the Ambassador.',
      },
      {
        type: 'quote',
        file: 'src/data/hisVoice.js → ambassador.quote',
        note: 'Verified line about the car.',
      },
    ],
  },
  {
    id: 'people',
    title: 'The People',
    note: 'Those he carried. Those who still call the number.',
    video: {
      src: 'https://www.youtube.com/embed/secFjTc5k-I',
      title: 'Social service on film',
    },
    quote: null,
    needed: [
      {
        type: 'audio',
        file: 'public/archive/media/voice-people.mp3',
        note: 'Testimony from someone he helped, if they consent.',
      },
      {
        type: 'quote',
        file: 'src/data/hisVoice.js → people.quote',
        note: 'A verified voice from the people, not invented.',
      },
    ],
  },
  {
    id: 'family',
    title: 'Family',
    note: 'The private cost of a public number.',
    video: null,
    quote: null,
    needed: [
      {
        type: 'video',
        file: 'public/archive/media/voice-family.mp4  (or a YouTube URL)',
        note: 'Family interview. Only with their consent.',
      },
      {
        type: 'audio',
        file: 'public/archive/media/voice-family.mp3',
        note: 'A daughter or relative, if they wish to speak.',
      },
      {
        type: 'quote',
        file: 'src/data/hisVoice.js → family.quote',
        note: 'Their words. Not ours.',
      },
    ],
  },
  {
    id: 'message',
    title: 'His Message',
    note: 'If there is a last word, it belongs here. Not a slogan we write for him.',
    video: null,
    quote: null,
    needed: [
      {
        type: 'video',
        file: 'public/archive/media/voice-message.mp4  (or a YouTube URL)',
        note: 'The interview clip where he says what the work was for.',
      },
      {
        type: 'audio',
        file: 'public/archive/media/voice-message.mp3',
        note: 'Audio of that same line, if film is not available.',
      },
      {
        type: 'quote',
        file: 'src/data/hisVoice.js → message.quote',
        note: 'Transcribe only what he said. Leave empty until then.',
      },
    ],
  },
];
