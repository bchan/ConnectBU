host="HOSTNAME"
user="USERNAME"
password="PASSWORD"
database="connectbudb"

SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://'+user+':'+password+'@'+host+'/'+database
SQLALCHEMY_TRACK_MODIFICATIONS = False
