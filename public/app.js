// Curated Core Indonesian TV Channels (100% Cloud-Ready 24/7 on Vercel + Auto-Fallback)
const DEFAULT_CHANNELS = [
  {
    id: 'trans7-hd',
    name: 'Trans7 HD',
    category: 'Nasional',
    quality: '720p',
    logo: 'https://i.imgur.com/fAbGImS.png',
    url: 'https://live.cnbcindonesia.com/trans7/smil:trans7.smil/playlist.m3u8',
    ref: 'https://www.cnbcindonesia.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    subtitle: 'Siaran Resmi Trans7 • Lapor Pak! • MotoGP • On The Spot'
  },
  {
    id: 'transtv-hd',
    name: 'Trans TV HD',
    category: 'Nasional',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Trans_TV_2013.svg/512px-Trans_TV_2013.svg.png',
    url: 'https://live.cnbcindonesia.com/transtv/smil:transtv.smil/playlist.m3u8',
    ref: 'https://www.cnbcindonesia.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    subtitle: 'Siaran Resmi Trans TV • Bioskop Trans TV • Brownis'
  },
  {
    id: 'mnctv-hd',
    name: 'MNCTV HD',
    category: 'Nasional',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/MNCTV_logo_2015.svg/512px-MNCTV_logo_2015.svg.png',
    url: 'https://linier-mnctv.rctiplus.id/mnctv-sdi.m3u8',
    ref: 'https://www.rctiplus.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    subtitle: 'Siaran Resmi MNCTV • Upin & Ipin • Family 100 • Liga Futsal'
  },
  {
    id: 'gtv-hd',
    name: 'GTV HD',
    category: 'Nasional',
    quality: '720p',
    logo: 'https://i.imgur.com/jjuKnYs.png',
    url: 'https://linier-gtv.rctiplus.id/gtv-sdi.m3u8',
    backupUrl: 'https://linier-gtv.rctiplus.id/gtv-sdi-avc1_1000000=7-mp4a_96000=1.m3u8',
    ref: 'https://www.rctiplus.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    subtitle: 'Siaran Resmi GTV • SpongeBob • Super Deal • Big Movies'
  },
  {
    id: 'mdtv-net-hd',
    name: 'MDTV / NET. HD',
    category: 'Nasional',
    quality: 'HD',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/MDTV_logo.svg/512px-MDTV_logo.svg.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h223/01.m3u8',
    backupUrl: 'https://op-flashcon-digdayahd-1.dens.tv/h/h223/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Resmi MDTV / NET. • Drama & Hiburan Keluarga'
  },
  {
    id: 'rtv-hd',
    name: 'RTV (Rajawali TV) HD',
    category: 'Nasional',
    quality: 'HD',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/RTV_Indonesia_logo.svg/512px-RTV_Indonesia_logo.svg.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h10/01.m3u8',
    backupUrl: 'https://op-flashcon-digdayahd-1.dens.tv/h/h10/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Resmi RTV • Kartun Anak • Anime & Tokusatsu'
  },
  {
    id: 'moji-hd',
    name: 'MOJI HD',
    category: 'Sports',
    quality: 'HD',
    logo: 'https://i.imgur.com/mM9zapJ.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h207/01.m3u8',
    backupUrl: 'https://op-flashcon-digdayahd-1.dens.tv/h/h207/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Resmi MOJI • Voli Proliga • VNL & Olahraga'
  },
  {
    id: 'indosiar-hd',
    name: 'Indosiar FHD',
    category: 'Nasional',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Indosiar_2015.svg/512px-Indosiar_2015.svg.png',
    url: '/api/vidio?id=205-indosiar',
    directLocal: true,
    vidioEmbedUrl: 'https://www.vidio.com/live/205-indosiar/embed?autoplay=true&player_only=true&mute=false',
    subtitle: 'Siaran Resmi Indosiar • Liga 1 • Mega Series • D’Academy'
  },
  {
    id: 'sctv-hd',
    name: 'SCTV FHD',
    category: 'Nasional',
    quality: '1080p',
    logo: 'https://i.imgur.com/EMmOvnQ.png',
    url: '/api/vidio?id=204-sctv',
    directLocal: true,
    vidioEmbedUrl: 'https://www.vidio.com/live/204-sctv/embed?autoplay=true&player_only=true&mute=false',
    subtitle: 'Siaran Resmi SCTV • Satu Untuk Semua • Sinetron & FTV'
  },
  {
    id: 'antv-hd',
    name: 'ANTV FHD',
    category: 'Nasional',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Antv_logo.svg/512px-Antv_logo.svg.png',
    url: '/api/vidio?id=782-antv',
    directLocal: true,
    vidioEmbedUrl: 'https://www.vidio.com/live/782-antv/embed?autoplay=true&player_only=true&mute=false',
    subtitle: 'Siaran Resmi ANTV • Mega Bollywood • Sinema Laga & Horor'
  },
  {
    id: 'mentari-tv',
    name: 'Mentari TV FHD',
    category: 'Entertainment',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mentari_TV_2022.svg/512px-Mentari_TV_2022.svg.png',
    url: '/api/vidio?id=8237-mentari-tv',
    directLocal: true,
    vidioEmbedUrl: 'https://www.vidio.com/live/8237-mentari-tv/embed?autoplay=true&player_only=true&mute=false',
    subtitle: 'Siaran Resmi Mentari TV • Kartun Anak & Keluarga'
  },
  {
    id: 'inews-hd',
    name: 'iNews TV HD',
    category: 'News',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/INews_logo_%282023%29.svg/512px-INews_logo_%282023%29.svg.png',
    url: 'https://linier-inews.rctiplus.id/inews-sdi.m3u8',
    backupUrl: 'https://linier-inews.rctiplus.id/inews-sdi-avc1_100000=7-mp4a_96000=1.m3u8',
    ref: 'https://www.rctiplus.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    subtitle: 'Siaran Resmi iNews • Berita Nasional & Sport MNC'
  },
  {
    id: 'metrotv-hd',
    name: 'Metro TV HD',
    category: 'News',
    quality: 'HD',
    logo: 'https://i.imgur.com/QnU70NI.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h12/01.m3u8',
    backupUrl: 'https://op-flashcon-digdayahd-1.dens.tv/h/h12/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Resmi Metro TV • Knowledge to Elevate'
  },
  {
    id: 'tvone-hd',
    name: 'tvOne HD',
    category: 'News',
    quality: 'HD',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/TvOne_2023.svg/512px-TvOne_2023.svg.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h40/01.m3u8',
    backupUrl: 'https://op-flashcon-digdayahd-1.dens.tv/h/h40/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Resmi tvOne • Apa Kabar Indonesia'
  },
  {
    id: 'beritasatu-hd',
    name: 'BeritaSatu (B-Universe) FHD',
    category: 'News',
    quality: '1080p',
    logo: 'https://i.postimg.cc/6pycF7Vx/300px-IDTV.png',
    url: '/api/vidio?id=18280-berita-satu',
    directLocal: true,
    vidioEmbedUrl: 'https://www.vidio.com/live/18280-berita-satu/embed?autoplay=true&player_only=true&mute=false',
    subtitle: 'Siaran Resmi BeritaSatu • News & Talkshow Nasional'
  },
  {
    id: 'cnn-indonesia',
    name: 'CNN Indonesia',
    category: 'News',
    quality: '720p',
    logo: 'https://i.imgur.com/l0JyOrm.png',
    url: 'https://video.detik.com/livecnn/smil:cnntv/chunklist_w268557525_b384000_sleng.m3u8',
    ref: 'https://www.cnnindonesia.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    subtitle: 'Berita Terkini Nasional & Internasional 24 Jam'
  },
  {
    id: 'cnbc-indonesia',
    name: 'CNBC Indonesia',
    category: 'News',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/CNBC_Indonesia_2025.svg/512px-CNBC_Indonesia_2025.svg.png',
    url: 'https://video.detik.com/livecnbc/smil:cnbctv/chunklist_w1279679883_b384000_sleng.m3u8',
    ref: 'https://www.cnbcindonesia.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    subtitle: 'Ekonomi, Bisnis, Saham & Market Update'
  },
  {
    id: 'btv-hd',
    name: 'BTV (B-Universe)',
    category: 'Nasional',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/BTV_%28Indonesia%29_logo_%282025%29.svg/512px-BTV_%28Indonesia%29_logo_%282025%29.svg.png',
    url: 'https://lnd0t3b922.tenbytecdn.com/ta-sg1/90369cf5-6ac2-411d-b3d0-15fae10a2e2c/master.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Berita & Hiburan Nasional Full HD'
  },
  {
    id: 'tvri-nasional',
    name: 'TVRI Nasional',
    category: 'Nasional',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/TVRILogo2019.svg/512px-TVRILogo2019.svg.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/Nasional/hls/Nasional.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Media Pemersatu Bangsa • Siaran Nasional'
  },
  {
    id: 'tvri-sport',
    name: 'TVRI Sport HD',
    category: 'Sports',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/TVRI_Sport_2022.svg/512px-TVRI_Sport_2022.svg.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/SportHD/hls/SportHD.m3u8',
    ref: '',
    ua: '',
    subtitle: 'BWF Badminton • Olahraga Nasional & Dunia'
  },
  {
    id: 'tvri-world',
    name: 'TVRI World',
    category: 'News',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/TVRIWorld.png/512px-TVRIWorld.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/TVRIWorld/hls/TVRIWorld.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Indonesian English Broadcast Channel'
  },
  {
    id: 'garuda-tv',
    name: 'Garuda TV',
    category: 'Nasional',
    quality: '1080p',
    logo: 'https://i.imgur.com/sXsAcZ3.png',
    url: 'https://hgmtv.com:19360/garudatvlivestreaming/garudatvlivestreaming.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Berita Nasional & Inspirasi Indonesia'
  },
  {
    id: 'nusantara-tv',
    name: 'Nusantara TV (NTV)',
    category: 'Nasional',
    quality: '1080p',
    logo: 'https://i.imgur.com/viun5hj.png',
    url: 'https://nusantaratv.siar.us/nusantaratv/live/playlist.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Sahabat Kita • TV Digital Nasional'
  },
  {
    id: 'sinpo-tv',
    name: 'Sin Po TV FHD',
    category: 'Nasional',
    quality: '1080p',
    logo: 'https://thumbor.prod.vidiocdn.com/eG5n4xS9H9bN8t_q3tI6e5T1w-A=/230x230/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/square_image/19046/c43934.png',
    url: '/api/vidio?id=19046-sin-po-tv',
    directLocal: true,
    vidioEmbedUrl: 'https://www.vidio.com/live/19046-sin-po-tv/embed?autoplay=true&player_only=true&mute=false',
    subtitle: 'Siaran Resmi Sin Po TV • Berita, Budaya & Hiburan'
  },
  {
    id: 'jaktv-fhd',
    name: 'JakTV Jakarta FHD',
    category: 'Daerah',
    quality: '1080p',
    logo: 'https://i.imgur.com/xyLLLOi.png',
    url: '/api/vidio?id=5415-jaktv',
    directLocal: true,
    vidioEmbedUrl: 'https://www.vidio.com/live/5415-jaktv/embed?autoplay=true&player_only=true&mute=false',
    subtitle: 'Siaran Resmi JakTV • Dari Jakarta Untuk Indonesia'
  },
  {
    id: 'rock-action',
    name: 'ROCK Action HD',
    category: 'Entertainment',
    quality: 'HD',
    logo: 'https://www.dens.tv/images/channel-logo/44.jpg',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h15/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Channel Film Action & Hollywood'
  },
  {
    id: 'celestial-movies',
    name: 'Celestial Movies HD',
    category: 'Entertainment',
    quality: 'HD',
    logo: 'https://www.dens.tv/images/channel-logo/99.jpg',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h14/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Film Box Office Mandarin & Asia'
  },
  {
    id: 'daai-tv',
    name: 'DAAI TV Indonesia',
    category: 'Entertainment',
    quality: 'HD',
    logo: 'https://i.imgur.com/YC7JCHo.png',
    url: 'https://pull.daaiplus.com/live-DAAIPLUS/live-DAAIPLUS_HD.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Televisi Cinta Kasih & Dokumenter Keluarga'
  },
  {
    id: 'ajwa-tv',
    name: 'Ajwa TV FHD',
    category: 'Religious',
    quality: '1080p',
    logo: 'https://i.imgur.com/JXjbUhB.png',
    url: '/api/vidio?id=7464-ajwa-tv',
    directLocal: true,
    vidioEmbedUrl: 'https://www.vidio.com/live/7464-ajwa-tv/embed?autoplay=true&player_only=true&mute=false',
    subtitle: 'Cermin Indahnya Islam • Siaran Religi'
  },
  {
    id: 'rodja-tv',
    name: 'Rodja TV',
    category: 'Religious',
    quality: '720p',
    logo: 'https://i.imgur.com/XwCeHlC.png',
    url: 'https://rodjatv.com/rodjatv/live.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Menebar Cahaya Sunnah • Kajian Islam'
  },
  {
    id: 'tvri-jabar',
    name: 'TVRI Jawa Barat',
    category: 'Daerah',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/TVRILogo2019.svg/512px-TVRILogo2019.svg.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/Jabar/hls/Jabar.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Siaran Daerah Jawa Barat & Bandung'
  },
  {
    id: 'tvri-jatim',
    name: 'TVRI Jawa Timur',
    category: 'Daerah',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/TVRILogo2019.svg/512px-TVRILogo2019.svg.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/Jatim/hls/Jatim.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Siaran Daerah Jawa Timur & Surabaya'
  },
  {
    id: 'tvri-jogja',
    name: 'TVRI Yogyakarta',
    category: 'Daerah',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/TVRILogo2019.svg/512px-TVRILogo2019.svg.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/Jogjakarta/hls/Jogjakarta.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Siaran Daerah Istimewa Yogyakarta'
  }
];

// Application State
let channels = [];
let favorites = JSON.parse(localStorage.getItem('bitstream_favorites') || '[]');
let activeCategory = 'All';
let searchQuery = '';
let currentChannel = null;
let useSmartProxy = true;
let hlsInstance = null;
let aspectModes = ['FIT', 'FILL', '16:9'];
let currentAspectIndex = 0;

// DOM Elements
const videoPlayer = document.getElementById('videoPlayer');
const playerOverlay = document.getElementById('playerOverlay');
const playerSpinner = document.getElementById('playerSpinner');
const overlayMessage = document.getElementById('overlayMessage');
const overlayActions = document.getElementById('overlayActions');
const channelListEl = document.getElementById('channelList');
const channelCountBadge = document.getElementById('channelCountBadge');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const proxyToggleBtn = document.getElementById('proxyToggleBtn');
const proxyStatusText = document.getElementById('proxyStatusText');
const qualitySelect = document.getElementById('qualitySelect');

// Initialize App
function initApp() {
  const savedCustom = localStorage.getItem('bitstream_custom_channels');
  if (savedCustom) {
    try {
      const parsed = JSON.parse(savedCustom);
      channels = [...DEFAULT_CHANNELS, ...parsed];
    } catch (_) {
      channels = [...DEFAULT_CHANNELS];
    }
  } else {
    channels = [...DEFAULT_CHANNELS];
  }

  renderChannelList();
  bindEvents();

  // Play first active channel or last watched
  const initialCh = channels[0];
  if (initialCh) {
    playChannel(initialCh);
  }
}

function getInitials(name) {
  return name
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('') || 'TV';
}

function getFilteredChannels() {
  return channels.filter((ch) => {
    const matchesSearch =
      !searchQuery ||
      ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ch.category && ch.category.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeCategory === 'All') return true;
    if (activeCategory === 'Favorites') return favorites.includes(ch.id);
    return ch.category.toLowerCase() === activeCategory.toLowerCase();
  });
}

function renderChannelList() {
  const filtered = getFilteredChannels();
  channelCountBadge.textContent = `${filtered.length} Channel`;

  if (filtered.length === 0) {
    channelListEl.innerHTML = `
      <div style="text-align:center; padding: 36px 16px; color: var(--text-muted); font-size: 0.85rem;">
        Tidak ada channel yang cocok.<br/>Coba kata kunci lain atau klik <strong>Full ID (120+ Ch)</strong> di atas.
      </div>
    `;
    return;
  }

  channelListEl.innerHTML = filtered
    .map((ch, idx) => {
      const isActive = currentChannel && currentChannel.id === ch.id;
      const isFav = favorites.includes(ch.id);
      const initials = getInitials(ch.name);
      const logoHtml = ch.logo
        ? `<img src="${ch.logo}" alt="${ch.name}" loading="lazy" onerror="this.parentElement.textContent='${initials}'" />`
        : initials;

      return `
        <div class="channel-card ${isActive ? 'active' : ''}" tabindex="0" data-id="${ch.id}">
          <span class="ch-number">${idx + 1}</span>
          <div class="ch-logo">${logoHtml}</div>
          <div class="ch-details">
            <div class="ch-name">${ch.name}</div>
            <div class="ch-meta">
              <span class="ch-badge">${ch.category || 'General'}</span>
              ${ch.quality ? `<span class="ch-badge">${ch.quality}</span>` : ''}
            </div>
          </div>
          <div class="ch-actions">
            <button class="fav-btn ${isFav ? 'is-fav' : ''}" data-fav="${ch.id}" title="Favorit">
              ★
            </button>
          </div>
        </div>
      `;
    })
    .join('');
}

function buildStreamUrl(channel) {
  if (channel.directLocal || channel.url.startsWith('/api/')) {
    return channel.url;
  }
  if (!useSmartProxy) {
    return channel.url;
  }
  const params = new URLSearchParams();
  params.set('url', channel.url);
  if (channel.ua) params.set('ua', channel.ua);
  if (channel.ref) params.set('ref', channel.ref);
  return `/api/proxy?${params.toString()}`;
}

function showOverlay(msg, isError = false) {
  playerOverlay.classList.remove('hidden');
  overlayMessage.textContent = msg;
  if (isError) {
    playerSpinner.classList.add('hidden');
    overlayActions.classList.remove('hidden');
  } else {
    playerSpinner.classList.remove('hidden');
    overlayActions.classList.add('hidden');
  }
}

function hideOverlay() {
  playerOverlay.classList.add('hidden');
}

function updateNowPlayingUI(channel) {
  document.getElementById('npTitle').textContent = channel.name;
  document.getElementById('npCategory').textContent = channel.category || 'Live TV';
  document.getElementById('npQuality').textContent = channel.quality || 'LIVE';
  document.getElementById('npSubtitle').textContent =
    channel.subtitle || `Streaming ${channel.name} • Smart Proxy ${useSmartProxy ? 'Aktif' : 'Direct'}`;
  document.getElementById('floatingChannelName').textContent = channel.name;

  const npLogoBox = document.getElementById('npLogoBox');
  const initials = getInitials(channel.name);
  if (channel.logo) {
    npLogoBox.innerHTML = `<img src="${channel.logo}" alt="${channel.name}" onerror="this.parentElement.textContent='${initials}'" />`;
  } else {
    npLogoBox.textContent = initials;
  }

  const favBtn = document.getElementById('favCurrentBtn');
  if (favorites.includes(channel.id)) {
    favBtn.classList.add('fav-active');
  } else {
    favBtn.classList.remove('fav-active');
  }
}

function clearEmbedIframe() {
  const existing = document.getElementById('vidioEmbedFrame');
  if (existing) existing.remove();
  videoPlayer.classList.remove('hidden');
}

function mountEmbedIframe(embedUrl) {
  clearEmbedIframe();
  hideOverlay();
  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }
  videoPlayer.pause();
  videoPlayer.classList.add('hidden');
  const iframe = document.createElement('iframe');
  iframe.id = 'vidioEmbedFrame';
  iframe.src = embedUrl;
  iframe.referrerPolicy = 'no-referrer';
  iframe.allow = 'autoplay; fullscreen; encrypted-media; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.style.cssText = 'width:100%;height:100%;border:0;background:#000;';
  document.getElementById('videoWrapper').appendChild(iframe);
}

async function playChannel(channel) {
  if (!channel) return;
  currentChannel = channel;
  localStorage.setItem('bitstream_last_channel', channel.id);

  updateNowPlayingUI(channel);
  renderChannelList();
  clearEmbedIframe();

  // Scroll active card into view
  setTimeout(() => {
    const activeCard = channelListEl.querySelector('.channel-card.active');
    if (activeCard) {
      activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 50);

  showOverlay(`Menghubungkan ke ${channel.name}...`, false);

  const isCloudHost =
    window.location.hostname.endsWith('.now') || window.location.hostname.endsWith('.vercel.app');

  // On Vercel cloud (24/7 even when laptop is off), play Indonesia-only Vidio channels directly via clean player with referrerPolicy="no-referrer" to bypass domain block!
  if (isCloudHost && channel.directLocal && channel.vidioEmbedUrl) {
    mountEmbedIframe(channel.vidioEmbedUrl);
    return;
  }

  let streamUrl = buildStreamUrl(channel);

  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }

  qualitySelect.innerHTML = '<option value="-1">Auto Quality</option>';

  if (window.Hls && Hls.isSupported()) {
    hlsInstance = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 30,
      manifestLoadingTimeOut: 15000,
      manifestLoadingMaxRetry: 2,
      levelLoadingTimeOut: 15000
    });

    hlsInstance.loadSource(streamUrl);
    hlsInstance.attachMedia(videoPlayer);

    hlsInstance.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
      hideOverlay();
      if (data.levels && data.levels.length > 1) {
        data.levels.forEach((lvl, idx) => {
          const label = lvl.height ? `${lvl.height}p` : `Level ${idx + 1}`;
          const opt = document.createElement('option');
          opt.value = idx;
          opt.textContent = label;
          qualitySelect.appendChild(opt);
        });
      }
      videoPlayer.play().catch(() => {
        // Autoplay with sound may be blocked by browser on first load; retry muted
        videoPlayer.muted = true;
        videoPlayer.play().catch(() => {});
      });
    });

    hlsInstance.on(Hls.Events.ERROR, (_, data) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            if (channel.backupUrl && channel.url !== channel.backupUrl) {
              channel.url = channel.backupUrl;
              playChannel(channel);
              return;
            }
            showOverlay(
              `Gagal memuat siaran ${channel.name} (Stream sedang offline / geo-restricted).`,
              true
            );
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            hlsInstance.recoverMediaError();
            break;
          default:
            showOverlay(`Siaran ${channel.name} tidak dapat diputar saat ini.`, true);
            break;
        }
      }
    });
  } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
    videoPlayer.src = streamUrl;
    videoPlayer.addEventListener(
      'loadedmetadata',
      () => {
        hideOverlay();
        videoPlayer.play().catch(() => {});
      },
      { once: true }
    );
    videoPlayer.addEventListener(
      'error',
      () => {
        showOverlay(`Siaran ${channel.name} gagal dimuat.`, true);
      },
      { once: true }
    );
  }
}

function toggleFavorite(channelId) {
  const idx = favorites.indexOf(channelId);
  if (idx === -1) {
    favorites.push(channelId);
  } else {
    favorites.splice(idx, 1);
  }
  localStorage.setItem('bitstream_favorites', JSON.stringify(favorites));
  if (currentChannel) updateNowPlayingUI(currentChannel);
  renderChannelList();
}

// M3U Parser supporting #EXTINF attributes & #EXTVLCOPT referer/user-agent
function parseM3uPlaylist(m3uContent) {
  const lines = m3uContent.split(/\r?\n/);
  const parsedChannels = [];
  let currentMeta = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith('#EXTINF:')) {
      const nameMatch = line.split(',');
      const rawName = nameMatch.length > 1 ? nameMatch.slice(1).join(',').trim() : 'Channel TV';

      const logoMatch = line.match(/tvg-logo="([^"]+)"/i);
      const groupMatch = line.match(/group-title="([^"]+)"/i);
      const refMatch = line.match(/http-referrer="([^"]+)"/i);
      const uaMatch = line.match(/http-user-agent="([^"]+)"/i);
      const qualityMatch = rawName.match(/\((1080p|720p|480p|360p|HD|FHD|SD)\)/i);

      const cleanName = rawName
        .replace(/\[(Not 24\/7|Geo-blocked)\]/gi, '')
        .replace(/\((Indonesia)\)/gi, '')
        .trim();

      let rawCat = groupMatch ? groupMatch[1].split(';')[0] : 'Nasional';
      if (rawCat === 'General' || rawCat === 'Undefined') rawCat = 'Daerah';

      currentMeta = {
        id: 'm3u-' + Math.random().toString(36).substring(2, 9),
        name: cleanName || rawName,
        logo: logoMatch ? logoMatch[1] : '',
        category: rawCat,
        quality: qualityMatch ? qualityMatch[1].toUpperCase() : 'LIVE',
        ref: refMatch ? refMatch[1] : '',
        ua: uaMatch ? uaMatch[1] : '',
        subtitle: rawName
      };
    } else if (line.startsWith('#EXTVLCOPT:http-referrer=')) {
      if (currentMeta) {
        currentMeta.ref = line.replace('#EXTVLCOPT:http-referrer=', '').trim();
      }
    } else if (line.startsWith('#EXTVLCOPT:http-user-agent=')) {
      if (currentMeta) {
        currentMeta.ua = line.replace('#EXTVLCOPT:http-user-agent=', '').trim();
      }
    } else if (!line.startsWith('#') && (line.startsWith('http://') || line.startsWith('https://'))) {
      if (currentMeta) {
        currentMeta.url = line;
        parsedChannels.push(currentMeta);
        currentMeta = null;
      }
    }
  }

  return parsedChannels;
}

function mergeImportedChannels(newItems) {
  const existingUrls = new Set(channels.map((c) => c.url));
  let addedCount = 0;
  newItems.forEach((item) => {
    if (!existingUrls.has(item.url)) {
      channels.push(item);
      existingUrls.add(item.url);
      addedCount++;
    }
  });
  renderChannelList();
  return addedCount;
}

async function importFromUrl(url) {
  const statusEl = document.getElementById('modalStatusMsg');
  statusEl.textContent = 'Mengambil playlist...';
  try {
    const fetchUrl = url.startsWith('/') ? url : `/api/proxy?url=${encodeURIComponent(url)}`;
    const res = await fetch(fetchUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const parsed = parseM3uPlaylist(text);
    const added = mergeImportedChannels(parsed);
    statusEl.textContent = `Berhasil menambah ${added} channel baru!`;
  } catch (err) {
    statusEl.textContent = `Gagal memuat URL: ${err.message}`;
  }
}

function stepChannel(direction) {
  const filtered = getFilteredChannels();
  if (filtered.length === 0) return;
  const idx = filtered.findIndex((c) => currentChannel && c.id === currentChannel.id);
  let nextIdx = idx + direction;
  if (nextIdx < 0) nextIdx = filtered.length - 1;
  if (nextIdx >= filtered.length) nextIdx = 0;
  playChannel(filtered[nextIdx]);
}

function selectCategory(cat) {
  activeCategory = cat;

  // Sync top category chips
  document.querySelectorAll('.cat-tab').forEach((t) => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });

  // Sync M3 BottomNav items
  document.querySelectorAll('.m3-nav-item').forEach((b) => {
    b.classList.toggle('active', b.dataset.bnav === cat);
  });

  // Sync Mobile Drawer items
  document.querySelectorAll('.drawer-item').forEach((d) => {
    d.classList.toggle('active', d.dataset.drawerCat === cat);
  });

  const titles = {
    All: 'Semua Channel',
    Favorites: '⭐ Channel Favorit',
    Nasional: '📺 TV Nasional',
    News: '📰 Berita 24 Jam',
    Sports: '⚽ Live Sports',
    Entertainment: '🎬 Hiburan & Film',
    Daerah: '🏛️ TV Daerah',
    Religious: '🕌 Siaran Religi'
  };
  const dirTitle = document.getElementById('directoryTitle');
  if (dirTitle) dirTitle.textContent = titles[cat] || 'Daftar Channel';

  renderChannelList();
}

function bindEvents() {
  // Click on channel list
  channelListEl.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) {
      e.stopPropagation();
      toggleFavorite(favBtn.dataset.fav);
      return;
    }
    const card = e.target.closest('.channel-card');
    if (card) {
      const ch = channels.find((c) => c.id === card.dataset.id);
      if (ch) playChannel(ch);
    }
  });

  // Category filter tabs
  document.getElementById('categoryTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-tab');
    if (!btn) return;
    selectCategory(btn.dataset.cat);
  });

  // View Mode Toggle (Grid 2-kolom vs List)
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewListBtn = document.getElementById('viewListBtn');
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      channelListEl.classList.add('mobile-grid');
      viewGridBtn.classList.add('active');
      viewListBtn.classList.remove('active');
    });
    viewListBtn.addEventListener('click', () => {
      channelListEl.classList.remove('mobile-grid');
      viewListBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
    });
  }

  // Mobile M3 Bottom Navigation Bar
  document.querySelectorAll('.m3-nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      const target = item.dataset.bnav;
      if (target === 'Playlist') {
        document.getElementById('playlistModal').classList.remove('hidden');
        return;
      }
      selectCategory(target);
    });
  });

  // Mobile Slide-Over Drawer (Capstone Pattern)
  const drawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  if (mobileMenuBtn && drawerBackdrop) {
    mobileMenuBtn.addEventListener('click', () => {
      drawerBackdrop.classList.remove('hidden');
    });
    closeDrawerBtn.addEventListener('click', () => {
      drawerBackdrop.classList.add('hidden');
    });
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        drawerBackdrop.classList.add('hidden');
      }
    });
  }

  document.querySelectorAll('.drawer-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectCategory(btn.dataset.drawerCat);
      drawerBackdrop.classList.add('hidden');
    });
  });

  const drawerLoadFullBtn = document.getElementById('drawerLoadFullBtn');
  if (drawerLoadFullBtn) {
    drawerLoadFullBtn.addEventListener('click', async () => {
      drawerLoadFullBtn.textContent = '⏳ Memuat 120+ Channel...';
      await importFromUrl('/api/id.m3u');
      drawerLoadFullBtn.textContent = '✅ 120+ Channel Daerah Aktif';
      setTimeout(() => drawerBackdrop.classList.add('hidden'), 400);
    });
  }

  const drawerOpenM3uBtn = document.getElementById('drawerOpenM3uBtn');
  if (drawerOpenM3uBtn) {
    drawerOpenM3uBtn.addEventListener('click', () => {
      drawerBackdrop.classList.add('hidden');
      document.getElementById('playlistModal').classList.remove('hidden');
    });
  }

  const drawerProxyBtn = document.getElementById('drawerProxyBtn');
  if (drawerProxyBtn) {
    drawerProxyBtn.addEventListener('click', () => {
      proxyToggleBtn.click();
      document.getElementById('drawerProxyLabel').textContent =
        `🛡️ Smart Proxy: ${useSmartProxy ? 'AKTIF (ON)' : 'MATI (OFF)'}`;
    });
  }

  // Mobile Search Bar Toggle
  const mobileSearchToggleBtn = document.getElementById('mobileSearchToggleBtn');
  const mobileSearchBar = document.getElementById('mobileSearchBar');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const closeMobileSearchBtn = document.getElementById('closeMobileSearchBtn');

  if (mobileSearchToggleBtn && mobileSearchBar) {
    mobileSearchToggleBtn.addEventListener('click', () => {
      const isHidden = mobileSearchBar.classList.toggle('hidden');
      if (!isHidden) {
        mobileSearchInput.focus();
      }
    });
    closeMobileSearchBtn.addEventListener('click', () => {
      mobileSearchInput.value = '';
      searchQuery = '';
      mobileSearchBar.classList.add('hidden');
      renderChannelList();
    });
    mobileSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      searchInput.value = searchQuery;
      renderChannelList();
    });
  }

  // Search input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    clearSearchBtn.classList.toggle('hidden', !searchQuery);
    renderChannelList();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderChannelList();
  });

  // Smart Proxy toggle
  proxyToggleBtn.addEventListener('click', () => {
    useSmartProxy = !useSmartProxy;
    proxyToggleBtn.classList.toggle('active', useSmartProxy);
    proxyStatusText.textContent = `Smart Proxy: ${useSmartProxy ? 'ON' : 'OFF'}`;
    if (currentChannel) playChannel(currentChannel);
  });

  // Quick load full id.m3u
  document.getElementById('loadFullIdBtn').addEventListener('click', async () => {
    const btn = document.getElementById('loadFullIdBtn');
    btn.disabled = true;
    btn.querySelector('span').textContent = 'Memuat...';
    await importFromUrl('/api/id.m3u');
    btn.querySelector('span').textContent = '120+ Ch Aktif ✓';
  });

  // Player controls
  document.getElementById('prevChannelBtn').addEventListener('click', () => stepChannel(-1));
  document.getElementById('nextChannelBtn').addEventListener('click', () => stepChannel(1));
  document.getElementById('favCurrentBtn').addEventListener('click', () => {
    if (currentChannel) toggleFavorite(currentChannel.id);
  });

  qualitySelect.addEventListener('change', (e) => {
    if (hlsInstance) {
      hlsInstance.currentLevel = parseInt(e.target.value, 10);
    }
  });

  document.getElementById('aspectBtn').addEventListener('click', () => {
    currentAspectIndex = (currentAspectIndex + 1) % aspectModes.length;
    const mode = aspectModes[currentAspectIndex];
    document.getElementById('aspectLabel').textContent = mode;
    videoPlayer.classList.remove('aspect-fill', 'aspect-stretch');
    if (mode === 'FILL') videoPlayer.classList.add('aspect-fill');
    if (mode === '16:9') videoPlayer.classList.add('aspect-stretch');
  });

  document.getElementById('pipBtn').addEventListener('click', async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (videoPlayer.requestPictureInPicture) {
        await videoPlayer.requestPictureInPicture();
      }
    } catch (_) {}
  });

  document.getElementById('fullscreenBtn').addEventListener('click', () => {
    const wrapper = document.getElementById('videoWrapper');
    if (!document.fullscreenElement) {
      (wrapper.requestFullscreen || videoPlayer.requestFullscreen).call(wrapper);
    } else {
      document.exitFullscreen();
    }
  });

  document.getElementById('retryStreamBtn').addEventListener('click', () => {
    if (currentChannel) playChannel(currentChannel);
  });

  document.getElementById('switchBackupBtn').addEventListener('click', () => {
    useSmartProxy = !useSmartProxy;
    proxyToggleBtn.classList.toggle('active', useSmartProxy);
    proxyStatusText.textContent = `Smart Proxy: ${useSmartProxy ? 'ON' : 'OFF'}`;
    if (currentChannel) playChannel(currentChannel);
  });

  // Keyboard & Smart TV Remote D-Pad Shortcuts
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key === 'ArrowUp' || e.key === 'ChannelUp') {
      e.preventDefault();
      stepChannel(-1);
    } else if (e.key === 'ArrowDown' || e.key === 'ChannelDown') {
      e.preventDefault();
      stepChannel(1);
    } else if (e.key.toLowerCase() === 'f') {
      e.preventDefault();
      document.getElementById('fullscreenBtn').click();
    }
  });

  // Modal controls
  const modal = document.getElementById('playlistModal');
  document.getElementById('openPlaylistModalBtn').addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  document.querySelectorAll('.m-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.m-tab').forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach((p) => p.classList.add('hidden'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.remove('hidden');
    });
  });

  document.getElementById('importUrlBtn').addEventListener('click', () => {
    const url = document.getElementById('m3uUrlInput').value.trim();
    if (url) importFromUrl(url);
  });

  document.querySelectorAll('.preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      importFromUrl(btn.dataset.url);
    });
  });

  document.getElementById('m3uFileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const parsed = parseM3uPlaylist(ev.target.result);
      const added = mergeImportedChannels(parsed);
      document.getElementById('modalStatusMsg').textContent = `File dimuat: +${added} channel!`;
    };
    reader.readAsText(file);
  });

  document.getElementById('addSingleChannelBtn').addEventListener('click', () => {
    const name = document.getElementById('customNameInput').value.trim();
    const cat = document.getElementById('customCatInput').value;
    const url = document.getElementById('customUrlInput').value.trim();
    const ref = document.getElementById('customRefInput').value.trim();
    const ua = document.getElementById('customUaInput').value.trim();

    if (!name || !url) {
      document.getElementById('modalStatusMsg').textContent = 'Nama & URL Stream wajib diisi!';
      return;
    }

    const newCh = {
      id: 'custom-' + Date.now(),
      name,
      category: cat,
      quality: 'CUSTOM',
      logo: '',
      url,
      ref,
      ua,
      subtitle: 'Custom User Stream'
    };

    channels.unshift(newCh);
    const saved = JSON.parse(localStorage.getItem('bitstream_custom_channels') || '[]');
    saved.unshift(newCh);
    localStorage.setItem('bitstream_custom_channels', JSON.stringify(saved));

    renderChannelList();
    playChannel(newCh);
    modal.classList.add('hidden');
  });

  document.getElementById('importRawBtn').addEventListener('click', () => {
    const raw = document.getElementById('rawM3uInput').value.trim();
    if (!raw) return;
    const parsed = parseM3uPlaylist(raw);
    const added = mergeImportedChannels(parsed);
    document.getElementById('modalStatusMsg').textContent = `Berhasil parse +${added} channel!`;
  });

  document.getElementById('resetPlaylistBtn').addEventListener('click', () => {
    localStorage.removeItem('bitstream_custom_channels');
    channels = [...DEFAULT_CHANNELS];
    renderChannelList();
    playChannel(channels[0]);
    document.getElementById('modalStatusMsg').textContent = 'Di-reset ke channel default.';
  });
}

document.addEventListener('DOMContentLoaded', initApp);
