const Busboy = require('busboy');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'pipesoto13',
  api_key: '734516618598841',
  api_secret: 'TMbGwijoFTtpygPrNfOEMPilp0o',
});

exports.formData = (req, res, next) => {
  const busboy = new Busboy({ headers: req.headers });
  req.body = {};

  let uploadingFile = false;
  let uploadingCount = 0;

  function done() {
    if(uploadingFile) return;
    if(uploadingCount > 0) return;

    next();
  };

  busboy.on('field', (key, value) => {
    req.body[key] = value;
  });

  busboy.on('file', (key, file) => {
    uploadingFile = true;
    uploadingCount++;

    const stream = cloudinary.uploader.upload_stream({
      upload_preset: 'FoodSaver',
    },
    (err, res) => {
      if(err) throw new Error('Something went wrong');

      req.body[key] = res.secure_url;
      uploadingFile = false;
      uploadingCount--;

      done();
    });

    file.on('data', buffer => {
      stream.write(buffer);
    });

    file.on('end', () => {
      stream.end();
    });
  });

  busboy.on('finish', () => {
    done();
  });

  req.pipe(busboy);
};
