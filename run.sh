
yarn newman run \
    -e https://api.getpostman.com/environments/$ENVIRONMENT_UID?apikey=$APIKEY \
    https://api.getpostman.com/collections/$COLLECTION_UID?apikey=$APIKEY \
    --reporters htmlextra,cli,json \
    --reporter-json-export out/output.json \
    --reporter-htmlextra-export out/index.html \
    --reporter-htmlextra-title "My test report"

node scripts/createBadge.js