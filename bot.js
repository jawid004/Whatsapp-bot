// Pair code link > https://qr-hazel-alpha.vercel.app/md
// Get your session id and put it in the space created for it don't remove "
const { spawnSync } = require('child_process')
const { existsSync, writeFileSync } = require('fs')

const SESSION_ID = 'levanter_1014ddec44132f490d9e2a962908cda5e9' // Edit this line only, don't remove ' <- this symbol

if (!existsSync('levanter')) {
  console.log('Cloning the repository...')
  const cloneResult = spawnSync(
    'git',
    ['clone', 'https://github.com/lyfe00011/levanter.git', 'levanter'],
    {
      stdio: 'inherit',
    }
  )

  if (cloneResult.error) {
    throw new Error(`Failed to clone the repository: ${cloneResult.error.message}`)
  }

  const configPath = 'levanter/config.env'
  try {
    console.log('Writing to config.env...')
    writeFileSync(configPath, `VPS=true\nSESSION_ID=${SESSION_ID}\nSUDO=2348158848771\nTZ=Africa/Lagos\nSTICKER_PACKNAME=RESONEX\nYT_COOKIE=VISITOR_PRIVACY_METADATA=CgJORxIEGgAgag%3D%3D;__Secure-3PSID=g.a000tAgPlFbpwYSh1NPZkSS70iwtRzNoHhK4Eu6r5xoluQ3qRaXGK1QzNVZEx1VIxdPuQHDO2gACgYKATASARYSFQHGX2MiUxEVoTgGopG0F375JK78yxoVAUF8yKovw9lxQMW9_5Vr_TCCyunC0076;SIDCC=AKEyXzWCyrJf_gVYYa3Q7mbQUNp4S4p8IN5qOJru8gVGZFIYMhSNZr-BLkuFN1-5Wd8TSYR4;YSC=DQuWWxjtygY;SID=g.a000tAgPlFbpwYSh1NPZkSS70iwtRzNoHhK4Eu6r5xoluQ3qRaXGaTLkd8Em6qIwHBriTWjFcwACgYKAbESARYSFQHGX2Mi5PeUEGaATCq8aW7Hq9qRQRoVAUF8yKr16_a2wk6TcLQw6xaXAQkq0076;__Secure-1PSIDTS=sidts-CjEBmiPuTcUQ4E-rFad9gncJD_0WHMuxdNLt7wmeDxyEDea3gR_A3KAEp1CqY7Olg_FREAA;ST-wv7pqz=csn=gt1bVefcm_pgT5br&itct=CAYQ6qgHGAAiEwimqPGBgp6LAxXm0XIJHQqvKMI%3D;SAPISID=r5fbCnMy1AkbRmE5/AL7zjROCMjszPjUDZ;__Secure-1PSIDCC=AKEyXzV2JN_MeJ7frUnt5zFXnEAClS6xvqjRRdmwFIdpK4nCMnMrrnziFlppS520InaU6FRAyA;SSID=AD5JwAYRtiJUEYDJd;__Secure-1PAPISID=r5fbCnMy1AkbRmE5/AL7zjROCMjszPjUDZ;__Secure-1PSID=g.a000tAgPlFbpwYSh1NPZkSS70iwtRzNoHhK4Eu6r5xoluQ3qRaXGoiwYYFxLATg60RJyv3mYyAACgYKASgSARYSFQHGX2MiH-Ona2pvej6LIPOHq77rDRoVAUF8yKqL136Zf6L7RH4ZO7XF8DlV0076;__Secure-3PAPISID=r5fbCnMy1AkbRmE5/AL7zjROCMjszPjUDZ;__Secure-3PSIDCC=AKEyXzWXs3QnLxev7Gom7UvozLXwmmi70Xq6b1Sd7yVkqwmUao3oVnbkya-NTQE-CA1EKZFTNw;__Secure-3PSIDTS=sidts-CjEBmiPuTcUQ4E-rFad9gncJD_0WHMuxdNLt7wmeDxyEDea3gR_A3KAEp1CqY7Olg_FREAA;__Secure-ROLLOUT_TOKEN=CNzWh67bmpKlWhCotqGxsJ2LAxiotqGxsJ2LAw%3D%3D;APISID=jJ9e3Ls1xZUWeEw6/AIoYOJsWwB6Zlooy6;HSID=AdCf93WOQRdB-QvFn;LOGIN_INFO=AFmmF2swRQIhAO5NXht_bHYIn7pk8Nfn1HylK4ny6Ihzbd-6wN1qpWq_AiAugRz6xJFJ-ZqVSHcO9JxR6-leTZ8982oZaY35eIzuwQ:QUQ3MjNmeHFaWm1ELU4waDZwU1drY05yZTZUWEV4ZmdrQXRoNFJpdU50cm9QczhISVI4enF5czdpQ055NmlSd2VpSGdWWVFBZjN5NkxyTkJ4VTBId3pDLVAzMlA3LU4yUEY0T0NHN3hUYm1sMUVOQlA2bEcxM3N5RmpIQWo3QVc1VVRZQ1V2YW9CWWM4SmIySjhYZ2tZVGFpamVmdXREZjFR;PREF=f6=40000000&f7=100&tz=Africa.Lagos&f5=30000;ST-qbx5mg=csn=fbkrafyaqs0JXd_P&itct=CIwBEPxaIhMI6qylsbCdiwMV4eNCBR0fwzUXMgZnLWhpZ2haD0ZFd2hhdF90b193YXRjaJoBBhCOHhiACg%3D%3D;ST-y1rk4u=csn=fbkrafyaqs0JXd_P&itct=CKgBEPxaIhMI6qylsbCdiwMV4eNCBR0fwzUXMgpnLWhpZ2gtcmVjWg9GRXdoYXRfdG9fd2F0Y2iaAQYQjh4YngE%3D;VISITOR_INFO1_LIVE=3CGLyI47ujs_`)
  } catch (err) {
    throw new Error(`Failed to write to config.env: ${err.message}`)
  }

  console.log('Installing dependencies...')
  const installResult = spawnSync('yarn', ['install', '--network-concurrency', '3'], {
    cwd: 'levanter',
    stdio: 'inherit',
  })

  if (installResult.error) {
    throw new Error(`Failed to install dependencies: ${installResult.error.message}`)
  }
}

spawnSync('yarn', ['start'], { cwd: 'levanter', stdio: 'inherit' })
