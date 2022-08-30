export const data = {
  data: {
    postsConnection: {
      edges: [
        {
          node: {
            postSlug: 'js-console-alternatives',
            title: "console.log alternatives you didn't know 😮",
            excerpt:
              "think that you are writing some JS code and it doesn't work correctly. What's the first thing you do? You are console.logging it! So I'm going to tell you some alternatives for console.log!",
            createdAt: '2022-08-08T17:03:39.452255+00:00',
            content: {
              raw: {
                children: [
                  {
                    type: 'heading-one',
                    children: [
                      {
                        text: 'Use destructuring',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'By using the destruction power of javascript objects, you can do this:',
                      },
                    ],
                  },
                  {
                    type: 'code-block',
                    children: [
                      {
                        text: 'const { log } = console;\n\nlog("hi");\nlog("testing");\n',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'You can change the ',
                      },
                      {
                        code: true,
                        text: 'log',
                      },
                      {
                        text: 'function to any other name you want like this:',
                      },
                    ],
                  },
                  {
                    type: 'code-block',
                    children: [
                      {
                        text: 'const { ',
                      },
                      {
                        text: 'log',
                        italic: true,
                      },
                      {
                        text: ': myLog } = console;\n\nmyLog("hi");\nmyLog("testing");',
                      },
                    ],
                  },
                  {
                    type: 'heading-three',
                    children: [
                      {
                        code: true,
                        text: 'console.group',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Ever wanted to group your logs? This method is perfect for you!',
                      },
                    ],
                  },
                  {
                    type: 'code-block',
                    children: [
                      {
                        text: 'console.group("groupName");\nconsole.log("hi");\nconsole.log("testing");\nconsole.groupEnd();\n\nconsole.group("groupName2");\nconsole.log("hi");\nconsole.log("testing");\nconsole.groupEnd();\n',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: '',
                      },
                      {
                        href: 'https://user-images.githubusercontent.com/76736580/182370493-7767d697-e566-4c49-92cb-05d165ab2436.png',
                        type: 'link',
                        title: '(Image)',
                        children: [
                          {
                            text: 'https://user-images.githubusercontent.com/76736580/182370493-7767d697-e566-4c49-92cb-05d165ab2436.png',
                          },
                        ],
                        openInNewTab: true,
                      },
                      {
                        text: '',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: "Nice isn't it?",
                      },
                    ],
                  },
                  {
                    type: 'heading-three',
                    children: [
                      {
                        code: true,
                        text: 'console.table',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Useful for printing an array.',
                      },
                    ],
                  },
                  {
                    type: 'code-block',
                    children: [
                      {
                        text: 'const arr = [1, 2, 3, 4, 5];\nconsole.table(arr);\n',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: '',
                      },
                    ],
                  },
                ],
              },
            },
            featuredImage: {
              url: 'https://media.graphassets.com/VZPNSL8mSiCQsYLhPK5E',
            },
            tags: [
              {
                title: 'javascript',
                tagSlug: 'javascript',
                tagColor: {
                  hex: '#dbff1b',
                },
              },
            ],
            authorId: {
              name: 'Yushaku',
            },
          },
        },
      ],
    },
  },
}
