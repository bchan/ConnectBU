host="HOSTNAME"
user="USERNAME"
password="PASSWORD"
database="connectbudb"

SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://'+user+':'+password+'@'+host+'/'+database
SQLALCHEMY_TRACK_MODIFICATIONS = False

# Google API Credentials
GOOGLE_CLIENT_ID = "575450034905-v02tn4l35jt2s3mhd46impe7pb79cc18.apps.googleusercontent.com"

# JWT Secret Key
JWT_SECRET_KEY = "supersecretkey"
