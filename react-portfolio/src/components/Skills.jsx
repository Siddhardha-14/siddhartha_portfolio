import {
  FigmaIcon,
  FramerIcon,
  IllustratorIcon,
  LovableIcon,
  CursorIcon,
  V0Icon,
  AntigravityIcon,
  StitchIcon,
  FigmaAIIcon,
  N8nIcon,
  MakeIcon,
  OpalIcon,
  SqlIcon,
  HtmlCssIcon,
  PowerBiIcon,
  JiraIcon,
  NotionIcon,
  SlackIcon,
  VsCodeIcon,
  MiroIcon,
} from './ToolIcons'

const toolIconMap = {
  figma: FigmaIcon,
  framer: FramerIcon,
  illustrator: IllustratorIcon,
  lovable: LovableIcon,
  cursor: CursorIcon,
  v0: V0Icon,
  antigravity: AntigravityIcon,
  stitch: StitchIcon,
  'figma-ai': FigmaAIIcon,
  n8n: N8nIcon,
  make: MakeIcon,
  opal: OpalIcon,
  sql: SqlIcon,
  'html-css': HtmlCssIcon,
  powerbi: PowerBiIcon,
  jira: JiraIcon,
  notion: NotionIcon,
  slack: SlackIcon,
  vscode: VsCodeIcon,
  miro: MiroIcon,
}

const bentoBoxes = [
  {
    className: 'bento-box featured',
    label: { icon: 'fa-wand-magic-sparkles', text: 'Future of Design' },
    title: 'AI-Native Production',
    pills: [
      { cls: 'master', toolKey: 'lovable', label: 'Lovable' },
      { cls: 'master', toolKey: 'cursor', label: 'Cursor' },
      { cls: 'master', toolKey: 'stitch', label: 'Stitch' },
      { cls: 'master', toolKey: 'v0', label: 'v0.dev' },
      { cls: 'master', toolKey: 'antigravity', label: 'Antigravity' },
      { cls: 'figma-ai', toolKey: 'figma-ai', label: 'Figma AI' },
    ],
  },
  {
    className: 'bento-box bento-wide',
    label: { icon: 'fa-pen-to-square', iconType: 'regular', text: 'Core Architecture' },
    title: 'UI/UX Strategy',
    pills: [
      { toolKey: 'figma', label: 'Figma' },
      { toolKey: 'illustrator', label: 'Adobe Illustrator' },
      { toolKey: 'framer', label: 'Framer' },
      { icon: 'fa-cubes', label: 'Design Systems' },
      { icon: 'fa-pencil-ruler', label: 'Wireframing' },
      { icon: 'fa-layer-group', label: 'Prototyping' },
      { icon: 'fa-diagram-project', label: 'User Flows' },
      { icon: 'fa-universal-access', label: 'A11y (WCAG)' },
      { icon: 'fa-microscope', label: 'Usability Testing' },
    ],
  },
  {
    className: 'bento-box',
    label: { icon: 'fa-gears', text: 'Workflow' },
    title: 'Automation',
    pills: [
      { toolKey: 'n8n', label: 'n8n' },
      { toolKey: 'make', label: 'Make' },
      { toolKey: 'opal', label: 'Opal' },
    ],
  },
  {
    className: 'bento-box',
    label: { icon: 'fa-code', text: 'Implementation' },
    title: 'Data & Dev',
    pills: [
      { toolKey: 'sql', label: 'SQL' },
      { toolKey: 'html-css', label: 'HTML/CSS' },
      { toolKey: 'powerbi', label: 'Power BI' },
    ],
  },
  {
    className: 'bento-box bento-wide',
    label: { icon: 'fa-people-group', text: 'Ecosystem' },
    title: 'Collaboration & Stack',
    pills: [
      { toolKey: 'jira', label: 'Jira' },
      { toolKey: 'notion', label: 'Notion' },
      { toolKey: 'slack', label: 'Slack' },
      { toolKey: 'vscode', label: 'VS Code' },
      { toolKey: 'miro', label: 'Miro' },
    ],
  },
]

function SkillPill({ pill }) {
  const IconComp = pill.toolKey ? toolIconMap[pill.toolKey] : null
  const iconType = pill.iconType || 'solid'

  return (
    <div
      className={`skill-pill${pill.cls ? ` ${pill.cls}` : ''}${
        pill.toolKey ? ` brand-${pill.toolKey}` : ''
      }`}
    >
      {IconComp ? (
        <IconComp className="tool-brand-logo" />
      ) : (
        <i className={`fa-${iconType} ${pill.icon}`}></i>
      )}{' '}
      <span>{pill.label}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="tools-section" id="tools">
      <div className="container">
        <div className="section-center-head" data-aos="">
          <div className="section-tag">— Skills</div>
          <h2 className="section-title">
            Modern <span className="highlight-gold">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            A curated mastery of industry-standard design tools, AI-assisted platforms, and front-end engineering.
          </p>
        </div>

        <div className="skills-bento">
          {bentoBoxes.map((box, i) => (
            <div className={box.className} key={i} data-aos="">
              <div className="bento-label">
                <i className={`fa-${box.label.iconType || 'solid'} ${box.label.icon}`}></i>
                {box.label.text}
              </div>
              <h3 className="bento-title">{box.title}</h3>
              <div className="skill-tags">
                {box.pills.map((pill, j) => (
                  <SkillPill key={j} pill={pill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
