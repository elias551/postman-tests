const { BadgeFactory } = require('gh-badges');
const { writeFileSync } = require('fs');

const {
  run: {
    stats: {
      assertions: { total, failed }
    }
  }
} = require(__dirname + `/../out/output.json`);

const svg = new BadgeFactory().create({
  text: [
    `Dev tests`,
    `${total - failed} / ${total}`
  ],
  color: failed ? 'red' : 'green',
  format: '#FF6C37',
  template: 'popout',
  logo:
    'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkY2QzM3IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UG9zdG1hbiBpY29uPC90aXRsZT48cGF0aCBkPSJNMTMuNTI3LjA5OUM2Ljk1NS0uNzQ0Ljk0MiAzLjkuMDk5IDEwLjQ3M2MtLjg0MyA2LjU3MiAzLjggMTIuNTg0IDEwLjM3MyAxMy40MjggNi41NzMuODQzIDEyLjU4Ny0zLjgwMSAxMy40MjgtMTAuMzc0QzI0Ljc0NCA2Ljk1NSAyMC4xMDEuOTQzIDEzLjUyNy4wOTl6bTIuNDcxIDcuNDg1YS44NTUuODU1IDAgMCAwLS41OTMuMjVsLTQuNDUzIDQuNDUzLS4zMDctLjMwNy0uNjQzLS42NDNjNC4zODktNC4zNzYgNS4xOC00LjQxOCA1Ljk5Ni0zLjc1M3ptLTQuODYzIDQuODYxbDQuNDQtNC40NGEuNjIuNjIgMCAxIDEgLjg0Ny45MDNsLTQuNjk5IDQuMTI1LS41ODgtLjU4OHptLjMzLjY5NGwtMS4xLjIzOGEuMDYuMDYgMCAwIDEtLjA2Ny0uMDMyLjA2LjA2IDAgMCAxIC4wMS0uMDczbC42NDUtLjY0NS41MTIuNTEyem0tMi44MDMtLjQ1OWwxLjE3Mi0xLjE3Mi44NzkuODc4LTEuOTc5LjQyNmEuMDc0LjA3NCAwIDAgMS0uMDg1LS4wMzkuMDcyLjA3MiAwIDAgMSAuMDEzLS4wOTN6bS0zLjY0NiA2LjA1OGEuMDc2LjA3NiAwIDAgMS0uMDY5LS4wODMuMDc3LjA3NyAwIDAgMSAuMDIyLS4wNDZoLjAwMmwuOTQ2LS45NDYgMS4yMjIgMS4yMjItMi4xMjMtLjE0N3ptMi40MjUtMS4yNTZhLjIyOC4yMjggMCAwIDAtLjExNy4yNTZsLjIwMy44NjVhLjEyNS4xMjUgMCAwIDEtLjIxMS4xMTdoLS4wMDNsLS45MzQtLjkzNC0uMjk0LS4yOTUgMy43NjItMy43NTggMS44Mi0uMzkzLjg3NC44NzRjLTEuMjU1IDEuMTAyLTIuOTcxIDIuMjAxLTUuMSAzLjI2OHptNS4yNzktMy40MjhoLS4wMDJsLS44MzktLjgzOSA0LjY5OS00LjEyNWEuOTUyLjk1MiAwIDAgMCAuMTE5LS4xMjdjLS4xNDggMS4zNDUtMi4wMjkgMy4yNDUtMy45NzcgNS4wOTF6bTMuNjU3LTYuNDZsLS4wMDMtLjAwMmExLjgyMiAxLjgyMiAwIDAgMSAyLjQ1OS0yLjY4NGwtMS42MSAxLjYxM2EuMTE5LjExOSAwIDAgMCAwIC4xNjlsMS4yNDcgMS4yNDdhMS44MTcgMS44MTcgMCAwIDEtMi4wOTMtLjM0M3ptMi41NzggMGExLjcxNCAxLjcxNCAwIDAgMS0uMjcxLjIxOGgtLjAwMWwtMS4yMDctMS4yMDcgMS41MzMtMS41MzNjLjY2MS43Mi42MzcgMS44MzItLjA1NCAyLjUyMnpNMTguODU1IDYuMDVhLjE0My4xNDMgMCAwIDAtLjA1My4xNTcuNDE2LjQxNiAwIDAgMS0uMDUzLjQ1LjE0LjE0IDAgMCAwIC4wMjMuMTk3LjE0MS4xNDEgMCAwIDAgLjA4NC4wMy4xNC4xNCAwIDAgMCAuMTA2LS4wNS42OTEuNjkxIDAgMCAwIC4wODctLjc1MS4xMzguMTM4IDAgMCAwLS4xOTQtLjAzM3oiLz48L3N2Zz4='
});

writeFileSync(
  __dirname + `/../out/badge.svg`,
  svg
);
