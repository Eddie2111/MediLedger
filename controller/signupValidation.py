from datetime import datetime
def signupValidation(data):
    source = {};
    try:
        source['name'] = str(data['name'])[0:32];
        source['email'] = str(data['email'])[0:35];
        source['password'] = str(data['password']);
        source['createdAt'] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        source['updatedAt'] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        source['accessRight'] = str(data['accessRight'])[0:6];
        source['nidNumber'] = str(data['nidNumber'])[0:65];
        source['phoneNumber'] = str(data['phoneNumber'])[0:14];
        source['licenseNumber'] = str(data['licenseNumber'])[0:65];
        return source;
    except:
        return False;
#        
        