module.exports = ({ env }) => {

  return ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('DO_ACCESS_ID'),
          secretAccessKey: env('DO_SECRET_KEY'),
          endpoint: env('DO_ENDPOINT'), // e.g. "s3.fr-par.scw.cloud"
          region: 'sgp1',
          params: {
            ACL: 'private', // <== set ACL to private
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 60 * 60),
            Bucket: env('DO_BUCKET'),
          },
        },
      },
    },
    // ...
  });

}
