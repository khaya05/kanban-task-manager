import { nanoid } from 'nanoid';

export const boards = [
  {
    id: nanoid(),
    name: 'untitled-column',
    columns: [],
  },
  {
    id: nanoid(),
    name: 'Platform Launch',
    columns: [
      {
        id: nanoid(),
        name: 'Todo',
        tasks: [
          {
            title: 'Build UI for onboarding flow',
            description: '',
            status: 'Todo',
            id: nanoid(),
            subtasks: [
              {
                title: 'Sign up page',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Sign in page',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Welcome page',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Build UI for search',
            description: '',
            status: 'Todo',
            id: nanoid(),
            subtasks: [
              {
                title: 'Search page',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Build settings UI',
            description: '',
            status: 'Todo',
            id: nanoid(),
            subtasks: [
              {
                title: 'Account page',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Billing page',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'QA and test all major user journeys',
            description:
              'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
            status: 'Todo',
            id: nanoid(),
            subtasks: [
              {
                title: 'Internal testing',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'External testing',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: nanoid(),
        name: 'Doing',
        tasks: [
          {
            title: 'Design settings and search pages',
            description: '',
            status: 'Doing',
            id: nanoid(),
            subtasks: [
              {
                title: 'Settings - Account page',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Settings - Billing page',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Search page',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Add account management endpoints',
            description: '',
            status: 'Doing',
            id: nanoid(),
            subtasks: [
              {
                title: 'Upgrade plan',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Cancel plan',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Update payment method',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Design onboarding flow',
            description: '',
            status: 'Doing',
            id: nanoid(),
            subtasks: [
              {
                title: 'Sign up page',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Sign in page',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Welcome page',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Add search enpoints',
            description: '',
            status: 'Doing',
            id: nanoid(),
            subtasks: [
              {
                title: 'Add search endpoint',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Define search filters',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Add authentication endpoints',
            description: '',
            status: 'Doing',
            id: nanoid(),
            subtasks: [
              {
                title: 'Define user model',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Add auth endpoints',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title:
              'Research pricing points of various competitors and trial different business models',
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            status: 'Doing',
            id: nanoid(),
            subtasks: [
              {
                title: 'Research competitor pricing and business models',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Outline a business model that works for our solution',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title:
                  'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: nanoid(),
        name: 'Done',
        tasks: [
          {
            title: 'Conduct 5 wireframe tests',
            description:
              'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
            status: 'Done',
            id: nanoid(),
            subtasks: [
              {
                title: 'Complete 5 wireframe prototype tests',
                id: nanoid(),
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Create wireframe prototype',
            description:
              'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
            status: 'Done',
            id: nanoid(),
            subtasks: [
              {
                title: 'Create clickable wireframe prototype in Balsamiq',
                id: nanoid(),
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Review results of usability tests and iterate',
            description:
              "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
            status: 'Done',
            id: nanoid(),
            subtasks: [
              {
                title:
                  'Meet to review notes from previous tests and plan changes',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Make changes to paper prototypes',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Conduct 5 usability tests',
                id: nanoid(),
                isCompleted: true,
              },
            ],
          },
          {
            title:
              'Create paper prototypes and conduct 10 usability tests with potential customers',
            description: '',
            status: 'Done',
            id: nanoid(),
            subtasks: [
              {
                title: 'Create paper prototypes for version one',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Complete 10 usability tests',
                id: nanoid(),
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Market discovery',
            description:
              'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
            status: 'Done',
            id: nanoid(),
            subtasks: [
              {
                title: 'Interview 10 prospective customers',
                id: nanoid(),
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Competitor analysis',
            description: '',
            status: 'Done',
            id: nanoid(),
            subtasks: [
              {
                title: 'Find direct and indirect competitors',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'SWOT analysis for each competitor',
                id: nanoid(),
                isCompleted: true,
              },
            ],
          },
          {
            title: 'Research the market',
            description:
              'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
            status: 'Done',
            id: nanoid(),
            subtasks: [
              {
                title: 'Write up research analysis',
                id: nanoid(),
                isCompleted: true,
              },
              {
                title: 'Calculate TAM',
                id: nanoid(),
                isCompleted: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Marketing Plan',
    columns: [
      {
        id: nanoid(),
        name: 'Todo',
        tasks: [
          {
            title: 'Plan Product Hunt launch',
            description: '',
            status: 'Todo',
            id: nanoid(),
            subtasks: [
              {
                title: 'Find hunter',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Gather assets',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Draft product page',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Notify customers',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Notify network',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Launch!',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Share on Show HN',
            description: '',
            status: '',
            id: nanoid(),
            subtasks: [
              {
                title: 'Draft out HN post',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Get feedback and refine',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Publish post',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Write launch article to publish on multiple channels',
            description: '',
            status: '',
            id: nanoid(),
            subtasks: [
              {
                title: 'Write article',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Publish on LinkedIn',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Publish on Inndie Hackers',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Publish on Medium',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: nanoid(),
        name: 'Doing',
        tasks: [],
      },
      {
        id: nanoid(),
        name: 'Done',
        tasks: [],
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Roadmap',
    columns: [
      {
        id: nanoid(),
        name: 'Now',
        tasks: [
          {
            title: 'Launch version one',
            description: '',
            status: '',
            id: nanoid(),
            subtasks: [
              {
                title: 'Launch privately to our wait list',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Launch publicly on PH, HN, etc.',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
          {
            title: 'Review early feedback and plan next steps for roadmap',
            description:
              "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
            status: '',
            id: nanoid(),
            subtasks: [
              {
                title: 'Interview 10 customers',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Review common customer pain points and suggestions',
                id: nanoid(),
                isCompleted: false,
              },
              {
                title: 'Outline next steps for our roadmap',
                id: nanoid(),
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: nanoid(),
        name: 'Next',
        tasks: [],
      },
      {
        id: nanoid(),
        name: 'Later',
        tasks: [],
      },
    ],
  },
];
