/*
Language: bash .bash
Author: Alexander Makarov (http://rmcreative.ru/)
*/

hljs.LANGUAGES.unix = function() {
  return {
    case_insensitive: true,
    contains: [
      {
        className: 'number',
        begin: /\$/,
        end: /$/,
        contains: [
          {
            className: 'function',
            begin: '[a-z_\-]+',
            end: /$/,
            contains: [
              {
                className: 'string',
                begin: '[\.a-z_\-]+',
                end: '$',
                contains: [
                  {
                    className: 'title',
                    begin: ' -[a-z_]+',
                    end: ' ',
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
}();
