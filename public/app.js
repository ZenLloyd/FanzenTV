// Curated TV Channels Organized by Region & Focus (Indonesia, China, Korea, Jepang, Sports, News, Daerah)
const DEFAULT_CHANNELS = [
  // ==================== INDONESIA ====================
  {
    id: 'rcti-hd',
    name: 'RCTI',
    category: 'Indonesia',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RCTI_logo_2015.svg/512px-RCTI_logo_2015.svg.png',
    url: '/api/rctiplus?id=1',
    directLocal: false,
    subtitle: 'Siaran Nasional • Timnas Indonesia, MasterChef & Sinetron'
  },
  {
    id: 'mnctv-hd',
    name: 'MNCTV',
    category: 'Indonesia',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/MNCTV_logo_2015.svg/512px-MNCTV_logo_2015.svg.png',
    url: '/api/rctiplus?id=2',
    backupUrl: 'https://linier-mnctv.rctiplus.id/mnctv-sdi.m3u8',
    ref: 'https://www.rctiplus.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    subtitle: 'Siaran Nasional • Upin & Ipin, Family 100 & Liga Futsal'
  },
  {
    id: 'gtv-hd',
    name: 'GTV',
    category: 'Indonesia',
    quality: '720p',
    logo: 'https://i.imgur.com/jjuKnYs.png',
    url: '/api/rctiplus?id=3',
    backupUrl: 'https://linier-gtv.rctiplus.id/gtv-sdi.m3u8',
    ref: 'https://www.rctiplus.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    subtitle: 'Siaran Nasional • SpongeBob, Super Deal & Big Movies'
  },
  {
    id: 'trans7-hd',
    name: 'Trans7',
    category: 'Indonesia',
    quality: '720p',
    logo: 'https://i.imgur.com/fAbGImS.png',
    url: 'https://live.cnbcindonesia.com/trans7/smil:trans7.smil/playlist.m3u8',
    ref: 'https://www.cnbcindonesia.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    subtitle: 'Siaran Nasional • Lapor Pak!, MotoGP & On The Spot'
  },
  {
    id: 'transtv-hd',
    name: 'Trans TV',
    category: 'Indonesia',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Trans_TV_2013.svg/512px-Trans_TV_2013.svg.png',
    url: 'https://live.cnbcindonesia.com/transtv/smil:transtv.smil/playlist.m3u8',
    ref: 'https://www.cnbcindonesia.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    subtitle: 'Siaran Nasional • Bioskop Trans TV & Brownis'
  },
  {
    id: 'indosiar-hd',
    name: 'Indosiar',
    category: 'Indonesia',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Indosiar_2015.svg/512px-Indosiar_2015.svg.png',
    url: '/api/vidio?id=205-indosiar',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h207/02.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Nasional • BRI Liga 1, Mega Series & D’Academy'
  },
  {
    id: 'sctv-hd',
    name: 'SCTV',
    category: 'Indonesia',
    quality: '1080p',
    logo: 'https://i.imgur.com/EMmOvnQ.png',
    url: '/api/vidio?id=204-sctv',
    subtitle: 'Siaran Nasional • Sinetron, FTV & Liputan 6'
  },
  {
    id: 'antv-hd',
    name: 'ANTV',
    category: 'Indonesia',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Antv_logo.svg/512px-Antv_logo.svg.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h40/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h14/index.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Nasional • Mega Bollywood, Sinema Laga & Hiburan'
  },
  {
    id: 'mdtv-net-hd',
    name: 'MDTV / NET.',
    category: 'Indonesia',
    quality: '720p50',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/MDTV_logo.svg/512px-MDTV_logo.svg.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h223/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h223/02.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Nasional • Drama & Hiburan Keluarga'
  },
  {
    id: 'rtv-hd',
    name: 'RTV (Rajawali TV)',
    category: 'Indonesia',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/RTV_Indonesia_logo.svg/512px-RTV_Indonesia_logo.svg.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h10/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h10/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Nasional • Kartun Anak, Anime & Tokusatsu'
  },
  {
    id: 'mentari-tv',
    name: 'Mentari TV',
    category: 'Indonesia',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mentari_TV_2022.svg/512px-Mentari_TV_2022.svg.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h10/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h17/index.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Nasional • Kartun Anak & Keluarga'
  },
  {
    id: 'tvri-nasional',
    name: 'TVRI Nasional',
    category: 'Indonesia',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/TVRILogo2019.svg/512px-TVRILogo2019.svg.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/Nasional/hls/Nasional.m3u8',
    backupUrl: '/api/vidio?id=6441-tvri',
    directLocal: true,
    ref: '',
    ua: '',
    subtitle: 'Televisi Republik Indonesia • Siaran Nasional'
  },
  {
    id: 'btv-hd',
    name: 'BTV',
    category: 'Indonesia',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/BTV_%28Indonesia%29_logo_%282025%29.svg/512px-BTV_%28Indonesia%29_logo_%282025%29.svg.png',
    url: 'https://lnd0t3b922.tenbytecdn.com/ta-sg1/90369cf5-6ac2-411d-b3d0-15fae10a2e2c/master.m3u8',
    ref: '',
    ua: '',
    subtitle: 'B-Universe • Berita & Hiburan Nasional'
  },
  {
    id: 'garuda-tv',
    name: 'Garuda TV',
    category: 'Indonesia',
    quality: '1080p',
    logo: 'https://i.imgur.com/sXsAcZ3.png',
    url: 'https://hgmtv.com:19360/garudatvlivestreaming/garudatvlivestreaming.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Siaran Nasional • Berita & Dokumenter Indonesia'
  },
  {
    id: 'nusantara-tv',
    name: 'Nusantara TV',
    category: 'Indonesia',
    quality: '1080p',
    logo: 'https://i.imgur.com/viun5hj.png',
    url: 'https://nusantaratv.siar.us/nusantaratv/live/playlist.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Siaran Digital Nasional'
  },
  {
    id: 'sinpo-tv',
    name: 'Sin Po TV',
    category: 'Indonesia',
    quality: '1080p',
    logo: 'https://thumbor.prod.vidiocdn.com/eG5n4xS9H9bN8t_q3tI6e5T1w-A=/230x230/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/square_image/19046/c43934.png',
    url: '/api/vidio?id=19046-sin-po-tv',
    subtitle: 'Siaran Nasional • Berita, Budaya & Hiburan'
  },
  {
    id: 'vtv-hd',
    name: 'VTV',
    category: 'Indonesia',
    quality: 'HD',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/VTV_Indonesia_red.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h16/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h10/index.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Visi Media • Kartun Anak & Hiburan Keluarga'
  },
  {
    id: 'rock-action',
    name: 'ROCK Action',
    category: 'Indonesia',
    quality: 'HD',
    logo: 'https://www.dens.tv/images/channel-logo/44.jpg',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h15/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h15/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Saluran Film Action & Box Office Hollywood'
  },
  {
    id: 'daai-tv',
    name: 'DAAI TV Indonesia',
    category: 'Indonesia',
    quality: 'HD',
    logo: 'https://i.imgur.com/YC7JCHo.png',
    url: 'https://pull.daaiplus.com/live-DAAIPLUS/live-DAAIPLUS_HD.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Dokumenter & Drama Keluarga'
  },
  {
    id: 'ajwa-tv',
    name: 'Ajwa TV',
    category: 'Indonesia',
    quality: '1080p',
    logo: 'https://i.imgur.com/JXjbUhB.png',
    url: '/api/vidio?id=7464-ajwa-tv',
    subtitle: 'Siaran Religi Islam Indonesia'
  },
  {
    id: 'rodja-tv',
    name: 'Rodja TV',
    category: 'Indonesia',
    quality: '720p',
    logo: 'https://i.imgur.com/XwCeHlC.png',
    url: 'https://rodjatv.com/rodjatv/live.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Siaran Kajian Islam'
  },

  // ==================== CHINA ====================
  {
    id: 'zhejiang-tv',
    name: 'Zhejiang TV (浙江卫视)',
    category: 'China',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Zhejiang_ Television_logo.svg/512px-Zhejiang_Television_logo.svg.png',
    url: 'https://ali-m-l.cztv.com/channels/lantian/channel001/1080p.m3u8',
    backupUrl: 'http://74.91.26.218:82/live/zjwshd.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Zhejiang Satellite TV • Keep Running, Variety Show & Drama China'
  },
  {
    id: 'hunan-tv',
    name: 'Hunan TV (湖南卫视)',
    category: 'China',
    quality: '1080p',
    logo: 'https://parco-zh.github.io/demo/HNWS.png',
    url: 'http://74.91.26.218:82/live/hnwshd.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Hunan Satellite TV • Drama Mandarin Utama & Variety Show'
  },
  {
    id: 'mango-tv',
    name: 'Mango TV Drama (芒果电视剧)',
    category: 'China',
    quality: '1080p',
    logo: 'https://parco-zh.github.io/demo/HNWS.png',
    url: 'https://liveapi.mgtv.com/',
    mgtvId: 484,
    directLocal: true,
    subtitle: 'Mango TV 24 Jam • Serial Drama China Romantis & Modern'
  },
  {
    id: 'mango-tv-intl',
    name: 'Mango TV Intl (湖南国际)',
    category: 'China',
    quality: '1080p',
    logo: 'https://parco-zh.github.io/demo/HNWS.png',
    url: 'https://liveapi.mgtv.com/',
    mgtvId: 229,
    directLocal: true,
    subtitle: 'Hunan TV International • Variety Show & Drama China'
  },
  {
    id: 'dragon-tv',
    name: 'Dragon TV (东方卫视)',
    category: 'China',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/zh/thumb/6/6f/Dragon_ Television_logo.svg/512px-Dragon_Television_logo.svg.png',
    url: 'http://74.91.26.218:82/live/dfwshd.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Shanghai Dragon TV • Serial Drama & Hiburan Mandarin'
  },
  {
    id: 'jiangsu-tv',
    name: 'Jiangsu TV (江苏卫视)',
    category: 'China',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/zh/thumb/9/9e/Jiangsu_Television_logo.svg/512px-Jiangsu_Television_logo.svg.png',
    url: 'http://74.91.26.218:82/live/jswshd.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Jiangsu Satellite TV • Drama Romantis & Reality Show China'
  },
  {
    id: 'cctv8-dracin',
    name: 'CCTV-8 Drama (央视八套)',
    category: 'China',
    quality: '1080p',
    logo: 'https://i.imgur.com/GyHaZ8X.png',
    url: 'http://74.91.26.218:82/live/cctv8hd.m3u8',
    ref: '',
    ua: '',
    subtitle: 'CCTV-8 • Saluran Khusus Serial Drama Tiongkok 24 Jam'
  },
  {
    id: 'cctv6-movie',
    name: 'CCTV-6 Movie (央视六套)',
    category: 'China',
    quality: '1080p',
    logo: 'https://i.imgur.com/rFiaef7.png',
    url: 'http://74.91.26.218:82/live/cctv6hd.m3u8',
    backupUrl: 'http://38.75.136.137:98/gslb/dsdqpub/dyjc.m3u8?auth=testpub',
    ref: '',
    ua: '',
    subtitle: 'CCTV-6 • Film Box Office & Sinema Mandarin'
  },
  {
    id: 'cctv3-variety',
    name: 'CCTV-3 Variety (央视三套)',
    category: 'China',
    quality: '1080p',
    logo: 'https://i.imgur.com/GyHaZ8X.png',
    url: 'http://74.91.26.218:82/live/cctv3hd.m3u8',
    ref: '',
    ua: '',
    subtitle: 'CCTV-3 • Musik, Komedi & Variety Show Tiongkok'
  },
  {
    id: 'cctv-storm-dracin',
    name: 'CCTV Storm Theater (风云剧场)',
    category: 'China',
    quality: '1080p',
    logo: 'https://i.imgur.com/rEttkKm.png',
    url: 'http://38.75.136.137:98/gslb/dsdqpub/fyjc.m3u8?auth=testpub',
    ref: '',
    ua: '',
    subtitle: 'Serial Drama Wuxia, Kolosal & Aksi Tiongkok'
  },
  {
    id: 'guangdong-tv',
    name: 'Guangdong TV (广东卫视)',
    category: 'China',
    quality: '1080p',
    logo: '',
    url: 'http://74.91.26.218:82/live/gdwshd.m3u8',
    backupUrl: 'https://h5cul1yar48um3t.wcetv.com/hls/gdsatellite.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Guangdong Satellite TV • Drama & Hiburan Tiongkok Selatan'
  },
  {
    id: 'shenzhen-tv',
    name: 'Shenzhen TV (深圳卫视)',
    category: 'China',
    quality: '1080p',
    logo: '',
    url: 'http://74.91.26.218:82/live/szwshd.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Shenzhen Satellite TV • Serial Drama & Lifestyle Modern'
  },
  {
    id: 'celestial-movies',
    name: 'Celestial Movies',
    category: 'China',
    quality: 'HD',
    logo: 'https://www.dens.tv/images/channel-logo/99.jpg',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h14/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h14/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Sinema Hong Kong & Box Office Mandarin'
  },

  // ==================== KOREA ====================
  {
    id: 'mbc-drama-kr',
    name: 'MBC Korea',
    category: 'Korea',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/MBCNET_%EB%A1%9C%EA%B3%A0.svg/512px-MBCNET_%EB%A1%9C%EA%B3%A0.svg.png',
    url: 'https://cdn-us-east-prod-ingest-infra-dacast-com.akamaized.net/624ff8f9-db18-da92-4d42-896fa2ff3eb3/source/index.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Munhwa Broadcasting Corp • K-Drama, Variety & Siaran Korea'
  },
  {
    id: 'sbs-kbc-kr',
    name: 'SBS KBC Korea',
    category: 'Korea',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/SBS_Logo_%282010%29.svg/512px-SBS_Logo_%282010%29.svg.png',
    url: 'https://vod.ikbc.co.kr/KBCTV/tv/playlist.m3u8',
    backupUrl: 'https://stream.ubc.co.kr/hls/ubctvstream/index.m3u8',
    ref: '',
    ua: '',
    subtitle: 'SBS Network Korea • Drama Korea, Inkigayo & Hiburan'
  },
  {
    id: 'mbc-daejeon-kr',
    name: 'MBC Daejeon (대전MBC)',
    category: 'Korea',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/MBCNET_%EB%A1%9C%EA%B3%A0.svg/512px-MBCNET_%EB%A1%9C%EA%B3%A0.svg.png',
    url: 'https://ns1.tjmbc.co.kr/live/myStream.sdp/playlist.m3u8',
    backupUrl: 'https://stream.chmbc.co.kr/TV/myStream/playlist.m3u8',
    ref: '',
    ua: '',
    subtitle: 'MBC Regional Network • Drama & Program TV Korea Selatan'
  },
  {
    id: 'arirang-tv-kr',
    name: 'Arirang TV',
    category: 'Korea',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arirang_TV_logo.svg/512px-Arirang_TV_logo.svg.png',
    url: 'http://amdlive-ch01.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8',
    backupUrl: 'https://freem3u.xyz/api/live/play.m3u8?vid=111',
    ref: '',
    ua: '',
    subtitle: 'K-Pop, Simply K-Pop, Budaya & Hiburan Korea Selatan'
  },
  {
    id: 'ktv-korea',
    name: 'KTV Korea (국민방송)',
    category: 'Korea',
    quality: '1080p',
    logo: '',
    url: 'https://hlive.ktv.go.kr/live/klive_h.stream/playlist.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Korean National Broadcast • Dokumenter & Budaya Korea'
  },
  {
    id: 'ebs-korea',
    name: 'EBS 1TV Korea',
    category: 'Korea',
    quality: '720p',
    logo: '',
    url: 'https://ebsonair.ebs.co.kr/ebs1familypc/familypc1m/playlist.m3u8',
    backupUrl: 'https://ebsonair.ebs.co.kr/plus1familypc/familypc1m/playlist.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Educational Broadcasting System • Edukasi & Keluarga Korea'
  },

  // ==================== JEPANG ====================
  {
    id: 'nhk-world-jp',
    name: 'NHK World Japan',
    category: 'Jepang',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/NHK_World-Japan_logo_2020.svg/512px-NHK_World-Japan_logo_2020.svg.png',
    url: '/api/vidio?id=7968-nhk-world-japan',
    backupUrl: 'https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Siaran Resmi NHK Tokyo • Budaya, Dokumenter & Berita Jepang'
  },
  {
    id: 'max-anime-hd',
    name: 'Anime Movies & Series JP',
    category: 'Jepang',
    quality: '1080p',
    logo: 'https://i.imgur.com/Oj3hEBh.jpg',
    url: 'https://jmp2.uk/plu-67ed8f7e443f0671bc2b2368.m3u8',
    backupUrl: 'https://jmp2.uk/plu-6793eaa4bc03978b9bc63db1.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Anime 24 Jam • Audio Jepang Asli & Subtitle CC'
  },
  {
    id: 'anime-hidive',
    name: 'Anime x HIDIVE',
    category: 'Jepang',
    quality: '1080p',
    logo: 'https://i.imgur.com/v0BlxCa.png',
    url: 'https://jmp2.uk/plu-6793eaa4bc03978b9bc63db1.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Serial Anime Isekai, Action & Sci-Fi'
  },
  {
    id: 'pluto-tv-anime',
    name: 'Pluto TV Anime',
    category: 'Jepang',
    quality: '1080p',
    logo: 'https://images.pluto.tv/channels/5f12136385bccc00070142ed/colorLogoPNG_1777595293242.png',
    url: 'https://jmp2.uk/plu-5812b7d3249444e05d09cc49.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Serial Anime Klasik & Populer'
  },
  {
    id: 'cgntv-japan',
    name: 'CGNTV Japan',
    category: 'Jepang',
    quality: '1080p',
    logo: '',
    url: 'https://d2p4mrcwl6ly4.cloudfront.net/out/v1/8d50f69fdbbf411a8d302743e4263716/CGNWebLiveJP.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Siaran Televisi Bahasa Jepang 24 Jam'
  },
  {
    id: 'qvc-japan',
    name: 'QVC Japan (QVCジャパン)',
    category: 'Jepang',
    quality: '1080p',
    logo: '',
    url: 'https://d1flvb4iqlercm.cloudfront.net/live/live_1080p_2nd.m3u8',
    backupUrl: 'https://stream3.shopch.jp/HLS/master.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Siaran Live Lifestyle & Produk Jepang (Chiba, Tokyo)'
  },

  // ==================== SPORTS ====================
  {
    id: 'tvri-sport',
    name: 'TVRI Sport',
    category: 'Sports',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/TVRI_Sport_2022.svg/512px-TVRI_Sport_2022.svg.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/SportHD/hls/SportHD.m3u8',
    directLocal: true,
    ref: '',
    ua: '',
    subtitle: 'BWF Badminton • Olahraga Nasional & Internasional'
  },
  {
    id: 'moji-hd',
    name: 'MOJI',
    category: 'Sports',
    quality: '720p50',
    logo: 'https://i.imgur.com/mM9zapJ.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h207/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h207/02.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Voli Proliga, VNL & Olahraga'
  },
  {
    id: 'dens-live-event',
    name: 'Dens Live Event',
    category: 'Sports',
    quality: 'HD',
    logo: 'https://picture.dens.tv/wp/img/tvchannels_v1/340x160/1745228970_tvchannels_v1.jpg',
    url: 'https://op-flashcon-digdayahd-1.dens.tv/h/h123/live.m3u8?app_type=web&userid=lite&chname=Live_Streaming_1',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Siaran Event Langsung Dens.TV'
  },
  {
    id: 'bein-sports-xtra',
    name: 'beIN SPORTS XTRA',
    category: 'Sports',
    quality: '1080p',
    logo: 'https://i.ibb.co/HT49GPmB/XTRA-2.png',
    url: 'https://bein-xtra-bein.amagi.tv/playlist.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Live Football, Motorsport & Sports'
  },
  {
    id: 'bein-sports-xtra-es',
    name: 'beIN SPORTS XTRA ES',
    category: 'Sports',
    quality: '1080p',
    logo: 'https://i.imgur.com/V562tpO.png',
    url: 'https://dc1644a9jazgj.cloudfront.net/beIN_Sports_Xtra_Espanol.m3u8',
    ref: '',
    ua: '',
    subtitle: 'beIN Sports • Live Matches & Deportes'
  },
  {
    id: 'cbs-golazo',
    name: 'CBS Sports Golazo',
    category: 'Sports',
    quality: '720p',
    logo: 'https://i.imgur.com/eMjutHS.png',
    url: 'https://jmp2.uk/plu-63a0e33a45264d000850ed7e.m3u8',
    ref: '',
    ua: '',
    subtitle: 'UEFA Champions League, Serie A & 24/7 Football'
  },
  {
    id: 'fubo-sports',
    name: 'Fubo Sports Network',
    category: 'Sports',
    quality: '1080p',
    logo: 'https://i.imgur.com/qFNRJLb.png',
    url: 'http://107.167.16.138/fubosportsnetwork/index.m3u8?token=test',
    backupUrl: 'https://op-flashcon-digdayahd-1.dens.tv/h/h71/wedo_sport.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Live Sports, Matches & Combat Highlights'
  },
  {
    id: 'fightbox-hd',
    name: 'FightBox HD',
    category: 'Sports',
    quality: '1080p',
    logo: 'https://i.imgur.com/mRsnztA.png',
    url: 'https://nosignal1.antenaplay.ro/hls/fightbox-hd/index.m3u8',
    ref: '',
    ua: '',
    subtitle: 'MMA, Kickboxing, Boxing & Martial Arts'
  },
  {
    id: 'glory-kickboxing',
    name: 'Glory Kickboxing',
    category: 'Sports',
    quality: '720p',
    logo: 'https://i.imgur.com/tS7Ub7i.png',
    url: 'https://6f972d29.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0dsb3J5S2lja2JveGluZ19ITFM/playlist.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Championship Kickboxing Live'
  },
  {
    id: 'redbull-tv',
    name: 'Red Bull TV',
    category: 'Sports',
    quality: '1080p',
    logo: 'https://images.pluto.tv/channels/5e7cb84a172a0f0007da69e4/colorLogoPNG.png',
    url: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Action Sports, Rally, Moto & Extreme Sports'
  },
  {
    id: 'floracing',
    name: 'FloRacing',
    category: 'Sports',
    quality: '1080p',
    logo: 'https://images.fubo.tv/channel-config-ui/station-logos/on-dark/floracing-white.png',
    url: 'https://amg02278-amg02278c1-flosports-worldwide-7592.playouts.now.amagi.tv/playlist.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Live Motorsports, Dirt Track & Drag Racing'
  },
  {
    id: 'tennis-channel',
    name: 'Tennis Channel',
    category: 'Sports',
    quality: '1080p',
    logo: 'https://i.imgur.com/tsljAnY.png',
    url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01444-tennischannelth-tennischannelnl-samsungnl/playlist.m3u8',
    ref: '',
    ua: '',
    subtitle: 'Live Tennis, Grand Slam & ATP/WTA Tours'
  },

  // ==================== NEWS (BERITA) ====================
  {
    id: 'kompas-tv-hd',
    name: 'Kompas TV',
    category: 'News',
    quality: '720p',
    logo: 'https://i.imgur.com/bD6UHeZ.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/s/s104/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/s/s104/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Berita Nasional • Independen Terpercaya'
  },
  {
    id: 'metrotv-hd',
    name: 'Metro TV',
    category: 'News',
    quality: '720p',
    logo: 'https://i.imgur.com/QnU70NI.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h12/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h12/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Berita Nasional • Knowledge to Elevate'
  },
  {
    id: 'tvone-hd',
    name: 'tvOne',
    category: 'News',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/TvOne_2023.svg/512px-TvOne_2023.svg.png',
    url: 'https://op-group1-densxvisionhd-1.dens.tv/h/h40/index.m3u8',
    backupUrl: 'https://op-group1-densxvisionhd-1.dens.tv/h/h40/01.m3u8',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Berita Nasional • Apa Kabar Indonesia'
  },
  {
    id: 'inews-hd',
    name: 'iNews TV',
    category: 'News',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/INews_logo_%282023%29.svg/512px-INews_logo_%282023%29.svg.png',
    url: '/api/rctiplus?id=4',
    backupUrl: 'https://dsgtq5sngxkde.cloudfront.net/inews/index.m3u8',
    ref: 'https://www.visionplus.id/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    subtitle: 'Berita Nasional & Olahraga MNC'
  },
  {
    id: 'cnn-indonesia',
    name: 'CNN Indonesia',
    category: 'News',
    quality: '720p',
    logo: 'https://i.imgur.com/l0JyOrm.png',
    url: 'https://video.detik.com/livecnn/smil:cnntv/playlist.m3u8',
    backupUrl: 'https://video.detik.com/livecnn/smil:cnntv/chunklist_w268557525_b384000_sleng.m3u8',
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
    url: 'https://video.detik.com/livecnbc/smil:cnbctv/playlist.m3u8',
    backupUrl: 'https://video.detik.com/livecnbc/smil:cnbctv/chunklist_w1279679883_b384000_sleng.m3u8',
    ref: 'https://www.cnbcindonesia.com/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    subtitle: 'Ekonomi, Bisnis, Saham & Market Update'
  },
  {
    id: 'beritasatu-hd',
    name: 'BeritaSatu',
    category: 'News',
    quality: '1080p',
    logo: 'https://i.postimg.cc/6pycF7Vx/300px-IDTV.png',
    url: '/api/vidio?id=18280-berita-satu',
    backupUrl: 'https://op-flashcon-digdayahd-1.dens.tv/h/h314/stream.m3u8?app_type=web&userid=lite&chname=Berita_Satu',
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'B-Universe • News & Talkshow Nasional'
  },
  {
    id: 'tvri-world',
    name: 'TVRI World',
    category: 'News',
    quality: '1080p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/TVRIWorld.png/512px-TVRIWorld.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/TVRIWorld/hls/TVRIWorld.m3u8',
    backupUrl: 'https://op-flashcon-digdayahd-1.dens.tv/h/h249/index.m3u8?app_type=web&userid=jjj&chname=TVRI_World',
    directLocal: true,
    ref: 'https://www.dens.tv/',
    ua: 'DENSGO/3.00.00 (Linux;Android 15.0.0;) ExoPlayerLib/2.19.1',
    subtitle: 'Indonesian English Broadcast Channel'
  },

  // ==================== DAERAH ====================
  {
    id: 'jaktv-fhd',
    name: 'JakTV Jakarta',
    category: 'Daerah',
    quality: '1080p',
    logo: 'https://i.imgur.com/xyLLLOi.png',
    url: '/api/vidio?id=5415-jaktv',
    backupUrl: 'https://dsgtq5sngxkde.cloudfront.net/jaktv/index.m3u8',
    ref: 'https://www.visionplus.id/',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    subtitle: 'Siaran Daerah DKI Jakarta'
  },
  {
    id: 'tvri-jabar',
    name: 'TVRI Jawa Barat',
    category: 'Daerah',
    quality: '720p',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/TVRILogo2019.svg/512px-TVRILogo2019.svg.png',
    url: 'https://ott-balancer.tvri.go.id/live/eds/Jabar/hls/Jabar.m3u8',
    directLocal: true,
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
    directLocal: true,
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
    directLocal: true,
    ref: '',
    ua: '',
    subtitle: 'Siaran Daerah Istimewa Yogyakarta'
  }
];

// Application State
let channels = [];
let favorites = JSON.parse(localStorage.getItem('bitstream_favorites') || '[]');
let activeCategory = 'All';
let liveEvents = [];
let searchQuery = '';
let currentChannel = null;
let useSmartProxy = true;
let hlsInstance = null;
let aspectModes = ['FIT', 'FILL', '16:9'];
let currentAspectIndex = 0;
let userSubtitlePref = localStorage.getItem('bitstream_subtitle_pref') || 'off';
let userQualityPref = localStorage.getItem('bitstream_quality_pref') || 'auto';

const CASUAL_PHRASES = [
  [/\bwhat are you doing\b/gi, 'lagi ngapain lu'],
  [/\bwhat's wrong\b/gi, 'kenapa emang'],
  [/\bwhat is wrong\b/gi, 'ada apa sih'],
  [/\bwhat is this\b/gi, 'apaan nih'],
  [/\bwhat is that\b/gi, 'apaan tuh'],
  [/\bwhat happened\b/gi, 'ada apa nih'],
  [/\bwhy are you doing this\b/gi, 'kenapa lu gini'],
  [/\bwhy did you do that\b/gi, 'kenapa lu lakuin itu'],
  [/\bi don't know\b/gi, 'gak tau gue'],
  [/\bi don't understand\b/gi, 'gue gak paham'],
  [/\bi understand\b/gi, 'gue paham kok'],
  [/\bi got it\b/gi, 'gue ngerti'],
  [/\bi'm sorry\b/gi, 'sorry ya'],
  [/\bi am sorry\b/gi, 'gue minta maaf'],
  [/\bexcuse me\b/gi, 'permisi'],
  [/\bthank you so much\b/gi, 'makasih banyak ya'],
  [/\bthank you\b/gi, 'makasih ya'],
  [/\bthanks\b/gi, 'makasih'],
  [/\byou're welcome\b/gi, 'sama-sama'],
  [/\bi love you\b/gi, 'gue sayang lu'],
  [/\bi miss you\b/gi, 'gue kangen lu'],
  [/\bare you crazy\b/gi, 'gila lu ya'],
  [/\bare you okay\b/gi, 'lu gak apa-apa kan'],
  [/\bare you alright\b/gi, 'lu baik-baik aja kan'],
  [/\bno way\b/gi, 'gak mungkin'],
  [/\breally\b/gi, 'beneran?'],
  [/\bof course\b/gi, 'pastilah'],
  [/\bwait a minute\b/gi, 'tunggu bentar'],
  [/\bwait for me\b/gi, 'tungguin gue'],
  [/\bhold on\b/gi, 'tunggu dulu'],
  [/\bshut up\b/gi, 'diem lu'],
  [/\bget out\b/gi, 'pergi sana'],
  [/\blet's go\b/gi, 'ayuk cabut'],
  [/\blet's eat\b/gi, 'makan yuk'],
  [/\bdon't worry\b/gi, 'tenang aja, santai'],
  [/\bdon't go\b/gi, 'jangan pergi dulu'],
  [/\bdon't do that\b/gi, 'jangan gitu dong'],
  [/\bsee you later\b/gi, 'sampai ketemu ntar'],
  [/\bgoodbye\b/gi, 'dadah'],
  [/\bhello\b/gi, 'halo'],
  [/\byes\b/gi, 'iya'],
  [/\bno\b/gi, 'enggak'],
  [/\bplease\b/gi, 'tolong ya'],
  [/\bi want to\b/gi, 'gue pengen'],
  [/\bi have to\b/gi, 'gue harus'],
  [/\bi will\b/gi, 'gue bakal'],
  [/\bi am\b/gi, 'gue lagi'],
  [/\bi'm\b/gi, 'gue'],
  [/\bi\b/g, 'gue'],
  [/\bme\b/gi, 'gue'],
  [/\bmy\b/gi, 'gue punya'],
  [/\byou\b/gi, 'lu'],
  [/\byour\b/gi, 'lu punya'],
  [/\bwe\b/gi, 'kita'],
  [/\bthey\b/gi, 'mereka'],
  [/\bhe\b/gi, 'dia'],
  [/\bshe\b/gi, 'dia']
];

function translateToCasualIndo(text) {
  if (!text) return '';
  let out = text;
  for (const [pattern, rep] of CASUAL_PHRASES) {
    out = out.replace(pattern, rep);
  }
  return out;
}

function applySubtitleChoice() {
  const overlay = document.getElementById('customSubtitleOverlay');
  if (!overlay) return;

  if (userSubtitlePref === 'off') {
    overlay.classList.add('hidden');
    overlay.textContent = '';
    if (hlsInstance) hlsInstance.subtitleTrack = -1;
    return;
  }

  if (!hlsInstance) return;

  let targetTrackIdx = 0;
  if (userSubtitlePref.startsWith('track_')) {
    targetTrackIdx = parseInt(userSubtitlePref.replace('track_', ''), 10) || 0;
  }
  hlsInstance.subtitleTrack = targetTrackIdx;

  function attachTrackListener() {
    for (let i = 0; i < videoPlayer.textTracks.length; i++) {
      const tt = videoPlayer.textTracks[i];
      tt.mode = 'hidden';
      tt.oncuechange = () => {
        if (userSubtitlePref === 'off') {
          overlay.classList.add('hidden');
          overlay.textContent = '';
          return;
        }
        const active = tt.activeCues;
        if (!active || active.length === 0) {
          overlay.classList.add('hidden');
          overlay.textContent = '';
          return;
        }
        let txt = Array.from(active).map((c) => c.text || '').join('\n').trim();
        if (!txt) {
          overlay.classList.add('hidden');
          return;
        }
        if (userSubtitlePref === 'indo') {
          overlay.textContent = translateToCasualIndo(txt);
        } else {
          overlay.textContent = txt;
        }
        overlay.classList.remove('hidden');
      };
    }
  }

  attachTrackListener();
  setTimeout(attachTrackListener, 500);
}

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

// Live Event detector (auto-pinned to top with EVENT tag)
async function refreshLiveEvents() {
  try {
    const res = await fetch('/api/events');
    const json = await res.json();
    liveEvents = (json.events || []).map((e) => ({
      id: e.id,
      name: e.name,
      category: 'Sports',
      quality: 'LIVE',
      logo: '',
      url: e.url,
      isEvent: true,
      subtitle: 'Siaran langsung event olahraga • Live Event'
    }));
    const eventTab = document.getElementById('eventCatTab');
    if (eventTab) {
      if (liveEvents.length > 0) {
        eventTab.style.display = 'inline-flex';
        eventTab.textContent = `Event (${liveEvents.length})`;
      } else {
        eventTab.style.display = 'none';
        if (activeCategory === 'Event' || activeCategory === 'Events') {
          activeCategory = 'All';
          document.querySelectorAll('.cat-tab').forEach((t) => t.classList.toggle('active', t.dataset.cat === 'All'));
        }
      }
    }
    renderChannelList();
  } catch (_) {}
}

// Initialize App
function initApp() {
  refreshLiveEvents();
  setInterval(refreshLiveEvents, 5 * 60 * 1000);
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
  return [...liveEvents, ...channels].filter((ch) => {
    const matchesSearch =
      !searchQuery ||
      ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ch.category && ch.category.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeCategory === 'All') return true;
    if (activeCategory === 'Event' || activeCategory === 'Events') return !!ch.isEvent;
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
              ${ch.isEvent ? '<span class="ch-badge event-badge">● EVENT</span>' : ''}
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
  if ((channel.directLocal && !channel._forceProxy) || channel.url.startsWith('/api/')) {
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

async function fetchJsonp(url, timeoutMs = 6000) {
  return new Promise((resolve, reject) => {
    const cbName = '__mgtv_cb_' + Math.random().toString(36).slice(2, 10);
    const script = document.createElement('script');
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error('JSONP timeout'));
    }, timeoutMs);
    function cleanup() {
      clearTimeout(timer);
      delete window[cbName];
      if (script.parentNode) script.parentNode.removeChild(script);
    }
    window[cbName] = (data) => {
      cleanup();
      resolve(data);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error('JSONP error'));
    };
    script.src = url + (url.includes('?') ? '&' : '?') + 'callback=' + cbName;
    document.head.appendChild(script);
  });
}

async function resolveMgtvLiveUrl(channelId) {
  const base = `https://liveapi.mgtv.com/v1/epg/turnplay/getLivePlayUrlMPP?version=PCPlayer&platform=1&buss_id=2000001&definition=uhd&channel_id=${channelId}`;
  let json = await fetchJsonp(base);
  if (json && json.data && json.data.url && json.data.url.includes('qq') && json.data.npuk) {
    json = await fetchJsonp(`${base}&npuk=${encodeURIComponent(json.data.npuk)}`);
  }
  if (json && json.data && json.data.url) {
    return json.data.url.replace(/^http:/, 'https:');
  }
  throw new Error('Mango TV stream not available');
}

function getBestLevelIndex(levels, targetHeight) {
  if (!levels || !levels.length) return -1;
  let bestIdx = 0;
  let bestDiff = Infinity;
  let maxBw = -1;
  levels.forEach((lvl, idx) => {
    const h = lvl.height || (lvl.bitrate >= 3500000 ? 1080 : lvl.bitrate >= 1800000 ? 720 : lvl.bitrate >= 900000 ? 480 : 360);
    const diff = Math.abs(h - targetHeight);
    if (diff < bestDiff || (diff === bestDiff && (lvl.bitrate || 0) > maxBw)) {
      bestDiff = diff;
      bestIdx = idx;
      maxBw = lvl.bitrate || 0;
    }
  });
  return bestIdx;
}

function populateQualityDropdown(levels = []) {
  const presets = [
    { value: 'auto', label: 'Auto (Max HD)' },
    { value: '2160p', label: '2160p (4K UHD)' },
    { value: '1440p', label: '1440p (2K QHD)' },
    { value: '1080p', label: '1080p (FHD)' },
    { value: '720p', label: '720p (HD)' },
    { value: '480p', label: '480p' },
    { value: '360p', label: '360p' }
  ];
  qualitySelect.innerHTML = '';
  presets.forEach((p) => {
    const opt = document.createElement('option');
    opt.value = p.value;
    opt.textContent = p.label;
    qualitySelect.appendChild(opt);
  });
  const exists = presets.some((p) => p.value === userQualityPref);
  qualitySelect.value = exists ? userQualityPref : 'auto';
  applyQualitySelection(qualitySelect.value, levels, false);
}

function applyQualitySelection(choice, levels = null, showToast = false) {
  const activeLevels = levels || (hlsInstance && hlsInstance.levels) || [];
  const npQualityEl = document.getElementById('npQuality');
  videoPlayer.classList.remove('upscale-fhd', 'upscale-2k', 'upscale-4k');
  if (npQualityEl) npQualityEl.classList.remove('q-ultra');

  let badgeLabel = (currentChannel && currentChannel.quality) || 'HD';

  if (choice === '2160p') {
    videoPlayer.classList.add('upscale-4k');
    if (hlsInstance && activeLevels.length > 0) {
      hlsInstance.currentLevel = getBestLevelIndex(activeLevels, 2160);
    }
    badgeLabel = '4K UHD';
    if (npQualityEl) npQualityEl.classList.add('q-ultra');
  } else if (choice === '1440p') {
    videoPlayer.classList.add('upscale-2k');
    if (hlsInstance && activeLevels.length > 0) {
      hlsInstance.currentLevel = getBestLevelIndex(activeLevels, 1440);
    }
    badgeLabel = '2K QHD';
    if (npQualityEl) npQualityEl.classList.add('q-ultra');
  } else if (choice === '1080p') {
    videoPlayer.classList.add('upscale-fhd');
    if (hlsInstance && activeLevels.length > 0) {
      hlsInstance.currentLevel = getBestLevelIndex(activeLevels, 1080);
    }
    badgeLabel = '1080p FHD';
  } else if (choice === '720p' || choice === '480p' || choice === '360p') {
    const targetH = parseInt(choice, 10);
    if (hlsInstance && activeLevels.length > 0) {
      hlsInstance.currentLevel = getBestLevelIndex(activeLevels, targetH);
    }
    badgeLabel = choice;
  } else {
    // Auto mode: start at highest level and allow ABR with high initial estimate
    if (hlsInstance) {
      if (activeLevels.length > 1) {
        const maxIdx = getBestLevelIndex(activeLevels, 1080);
        hlsInstance.loadLevel = maxIdx;
      }
      hlsInstance.currentLevel = -1;
    }
  }

  if (npQualityEl) {
    npQualityEl.textContent = badgeLabel;
  }
  if (showToast) {
    showOverlay(`Resolusi disetel ke ${badgeLabel}`, false);
    setTimeout(hideOverlay, 1300);
  }
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

  let streamUrl = buildStreamUrl(channel);
  if (channel.mgtvId) {
    try {
      streamUrl = await resolveMgtvLiveUrl(channel.mgtvId);
      if (currentChannel !== channel) return;
    } catch (_) {
      showOverlay(`Gagal memuat token siaran ${channel.name}.`, true);
      return;
    }
  }

  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }

  populateQualityDropdown([]);

  if (window.Hls && Hls.isSupported()) {
    hlsInstance = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 30,
      abrEwmaDefaultEstimate: 12000000,
      manifestLoadingTimeOut: 15000,
      manifestLoadingMaxRetry: 2,
      levelLoadingTimeOut: 15000
    });

    hlsInstance.loadSource(streamUrl);
    hlsInstance.attachMedia(videoPlayer);

    hlsInstance.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, (_, data) => {
      const subSelect = document.getElementById('subtitleSelect');
      if (!subSelect) return;
      const tracks = data.subtitleTracks || [];
      if (tracks.length === 0) {
        subSelect.innerHTML = '<option value="off">Off</option>';
        subSelect.title = 'Siaran ini tidak membawa trek subtitle terpisah (hardsub / audio asli)';
        applySubtitleChoice();
        return;
      }
      subSelect.title = 'Pilih Subtitle';
      subSelect.innerHTML = '<option value="off">Off</option>';

      // Option Indonesia
      const optIndo = document.createElement('option');
      optIndo.value = 'indo';
      optIndo.textContent = 'Indonesia';
      subSelect.appendChild(optIndo);

      tracks.forEach((tr, i) => {
        const opt = document.createElement('option');
        opt.value = 'track_' + i;
        let label = tr.name || tr.lang || `Track ${i + 1}`;
        if (/^en/i.test(label) || /english/i.test(label)) label = 'English';
        else if (/^es/i.test(label) || /spanish/i.test(label)) label = 'Spanish';
        else if (/^ko/i.test(label) || /korean/i.test(label)) label = 'Korean';
        else if (/^zh/i.test(label) || /chinese/i.test(label)) label = 'Chinese';
        opt.textContent = label;
        subSelect.appendChild(opt);
      });

      const exists = Array.from(subSelect.options).some((o) => o.value === userSubtitlePref);
      subSelect.value = exists ? userSubtitlePref : 'off';
      applySubtitleChoice();
    });

    hlsInstance.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
      hideOverlay();
      populateQualityDropdown(data.levels || []);
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
            if (channel.directLocal && !channel._forceProxy && !channel.mgtvId) {
              channel._forceProxy = true;
              playChannel(channel);
              return;
            }
            if (channel.backupUrl && channel.url !== channel.backupUrl) {
              channel.url = channel.backupUrl;
              channel.directLocal = false;
              channel._forceProxy = false;
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
    const isAct = t.dataset.cat.toLowerCase() === cat.toLowerCase();
    t.classList.toggle('active', isAct);
    if (isAct) {
      t.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
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
    Event: 'Live Event',
    Favorites: 'Favorit',
    Indonesia: 'TV Indonesia',
    China: 'TV China',
    Korea: 'TV Korea',
    Jepang: 'TV Jepang',
    Sports: 'Live Sport',
    News: 'Berita',
    Daerah: 'TV Daerah'
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
      const ch = [...liveEvents, ...channels].find((c) => c.id === card.dataset.id);
      if (ch) playChannel(ch);
    }
  });

  // Category filter tabs + smooth mousewheel & drag scrolling
  const catTabs = document.getElementById('categoryTabs');
  if (catTabs) {
    catTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-tab');
      if (!btn) return;
      selectCategory(btn.dataset.cat);
    });

    // Horizontal wheel scroll (crucial for desktop/laptop mouse users)
    catTabs.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        catTabs.scrollLeft += e.deltaY * 1.5;
      }
    }, { passive: false });

    // Click and drag to scroll for mouse
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    catTabs.addEventListener('mousedown', (e) => {
      isDown = true;
      catTabs.classList.add('grabbing');
      startX = e.pageX - catTabs.offsetLeft;
      scrollLeft = catTabs.scrollLeft;
    });
    window.addEventListener('mouseup', () => {
      isDown = false;
      if (catTabs) catTabs.classList.remove('grabbing');
    });
    catTabs.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - catTabs.offsetLeft;
      const walk = (x - startX) * 1.6;
      catTabs.scrollLeft = scrollLeft - walk;
    });
  }

  // Subtitle / CC dropdown handler
  const subSelect = document.getElementById('subtitleSelect');
  if (subSelect) {
    subSelect.value = userSubtitlePref;
    subSelect.addEventListener('change', () => {
      userSubtitlePref = subSelect.value;
      localStorage.setItem('bitstream_subtitle_pref', userSubtitlePref);
      applySubtitleChoice();
      const label = subSelect.options[subSelect.selectedIndex]?.textContent || userSubtitlePref;
      showOverlay(`Subtitle disimpan: ${label}`, false);
      setTimeout(hideOverlay, 1500);
    });
  }

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
      drawerLoadFullBtn.textContent = 'Memuat 120+ Channel...';
      await importFromUrl('/api/id.m3u');
      drawerLoadFullBtn.textContent = '120+ Channel Daerah Aktif';
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
        `Smart Proxy: ${useSmartProxy ? 'ON' : 'OFF'}`;
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
    userQualityPref = e.target.value;
    localStorage.setItem('bitstream_quality_pref', userQualityPref);
    applyQualitySelection(userQualityPref, null, true);
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
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stepChannel(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      stepChannel(1);
    } else if (e.key === ' ' || e.key === 'MediaPlayPause') {
      e.preventDefault();
      if (videoPlayer.paused) videoPlayer.play().catch(() => {});
      else videoPlayer.pause();
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
