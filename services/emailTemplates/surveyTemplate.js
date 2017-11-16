const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div style="width: 75px; height: 45px; margin: 5px auto; text-align: center;">
            <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/yes">Yes</a>
          </div>
          <div style="width: 75px; height: 45px; margin: 5px auto; text-align: center;">
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
