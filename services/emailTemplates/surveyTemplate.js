const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <table style="width: 440px; height: 440px; text-align: center; font-family: Arial, Helvetica, sans-serif; border: 1px solid #eee; background-color: #F2F2F2; color: #4F4F4F; margin: 0 auto;">
          <tr style="width: 100%; height: 20%;">
            <td>
              <h2>I would like your feedback!</h2>
            </td>
          </tr>
          <tr style="width: 100%; height: 10%;">
            <td>
              <h4>Please answer the following question ... </h4>
            </td>
          </tr>
          <tr style="width: 100%; height: auto;">
            <td style="width: 100%; border-top: 1px solid #fff; overflow: hidden;">
              <p>${survey.body}
                  <div>
                    <a style="text-decoration: none;" href="${
                      keys.redirectDomain
                    }/api/surveys/${survey.id}/yes">Yes</a>
                  </div>
                  <div>
                    <a style="text-decoration: none;" href='"${
                      keys.redirectDomain
                    }/api/surveys/${survey.id}/no"'>No</a>
                  </div>
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};
