<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Matchless Web</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #0F1A16; /* mw-ink */
            color: #F0ECE4; /* fg-1 dark */
            margin: 0;
            padding: 40px;
            line-height: 1.6;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            background-color: #18231E; /* bg-2 dark */
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
          }
          header {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          h1 {
            font-weight: 600;
            margin: 0 0 10px 0;
            color: #FFFFFF;
            font-size: 32px;
            letter-spacing: -0.02em;
          }
          p {
            margin: 0;
            color: #8A867C;
            font-size: 16px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            text-align: left;
            padding: 12px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.14);
            font-size: 14px;
            font-weight: 500;
            color: #B8B5AC;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td {
            padding: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 15px;
          }
          tr:hover td {
            background-color: rgba(255, 255, 255, 0.02);
          }
          a {
            color: #6BCAA8; /* mw-green-400 */
            text-decoration: none;
            transition: color 0.2s ease;
          }
          a:hover {
            color: #49BB94;
            text-decoration: underline;
          }
          .url-cell {
            word-break: break-all;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>Matchless Web XML Sitemap</h1>
            <p>This sitemap is designed for Google and other search engines to crawl and index the site more effectively.</p>
            <p style="margin-top: 8px;">You can find out more about XML sitemaps at <a href="https://sitemaps.org" target="_blank" rel="noopener noreferrer">sitemaps.org</a>.</p>
          </header>
          
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Frequency</th>
              </tr>
            </thead>
            <tbody>
              <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
              <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td class="url-cell">
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="concat(sitemap:priority*100,'%')"/>
                  </td>
                  <td>
                    <xsl:value-of select="concat(translate(substring(sitemap:changefreq, 1, 1),concat($lower, $upper),concat($upper, $lower)),substring(sitemap:changefreq, 2))"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
