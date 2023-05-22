// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  const iconSet = ['⭐', '🤖', '🍉', '🏎', '🦼', '🚨', '🍔', '🎭'];
  const icon = iconSet[Math.floor(Math.random() * iconSet.length)];
  res.render('home/homeView', { icon });
};

// GET "/index"
const about = (req, res) => {
  res.send('⚠️ UNDER CONSTRUCTION: GET /about ⚠️');
};

// Controlador Home
export default {
  home,
  about,
};
