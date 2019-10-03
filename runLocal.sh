yarn newman run \
    -e ./data/dev.json \
    ./data/tests.json \
    --reporters htmlextra,cli,json \
    --reporter-json-export out/output.json \
    --reporter-htmlextra-export out/index.html \
    --reporter-htmlextra-title "My test report"

node scripts/createBadge.js