import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Introduction",
    url: "https://mothermayi.gatsbyjs.io",
    description:
      "Watch Full Movie Mother, May I? (2023): Step into the world of brilliance and intrigue as we delve into the mesmerizing journey of J. Robert Oppenheimer, the father of the atomic bomb. In this SEO-optimized article, we explore the cinematic masterpiece that captivated audiences worldwide and left an indelible mark on the film industry. From the visionary direction to the stellar performances, and from historical accuracy to artistic brilliance, Mother, May I? (2023) stands tall as a testament to the power of storytelling. So, let's take a deep dive into the heart of this compelling movie. Mother, May I? (2023), under the masterful direction of acclaimed filmmaker Christopher Nolan, takes audiences on an immersive journey through history, shedding light on the scientific brilliance and moral dilemmas faced by Oppenheimer and his team during the Manhattan Project. With a star-studded cast led by the brilliant Christian Bale as J. Robert Oppenheimer and Cate Blanchett as the enigmatic physicist Lisa Meitner, the film is a tour de force of performances that have earned accolades from critics and moviegoers alike. Throughout this article, we will dissect the plot, examine the film's historical accuracy, and delve into its critical reception, box office success, and cultural impact. From behind-the-scenes challenges to comparisons between fact and fiction, we leave no stone unturned in our exploration of this cinematic marvel. So, buckle up as we embark on this riveting cinematic journey that will not only entertain but also inspire dialogue on the weighty matters of science, ethics, and the human condition. Get ready to immerse yourself in the world of Watch Full Movie Mother, May I? (2023), a film that continues to shine bright as a beacon of storytelling brilliance in the vast galaxy of cinema.",
  },
  {
    text: " ",
    url: " ",
    description:
      " ",
  },
  {
    text: " ",
    url: " ",
    description:
      " ",
  },
  {
    text: " ",
    url: " ",
    description:
      " ",
  },
]

const samplePageLinks = [
  {
    text: "Mother, May I? (2023)",
    url: "https://aius.site/movie/1019961/mother-may-i.html",
    description:
      "13 secs ago - To day update movie Teenage Mutant Ninja Turtles: Mutant Mayhem with HBO films (sorted by popularity ascending). Take 5 with watch Teenage Mutant Ninja Turtles: Mutant Mayhem (2023) to Downloading or watching streaming the full movie Teenage Mutant Ninja Turtles: Mutant Mayhem online will be available to watch full Teenage Mutant Ninja Turtles: Mutant Mayhem online on official Netflix's very soon!. To submit an email request for support, go to official hulu.com and click help at the bottom of the page Teenage Mutant Ninja Turtles: Mutant Mayhem watch full online. Customer can contact hulu by phone or email. Save who you can save.",
  },
  
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/oppenheimer2023.jpg"
        loading="eager"
        width={720}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Watch Full <b>Mother, May I? (2023) Movie</b> - At Home Online Streaming Here's How
      </h1>
       <p className={styles.intro}>
        <b>Visit Link To Watch Full Movie: 👉</b> {" "}
       {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        
      </p>
    </div>
    <ul className={styles.textjustify}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
