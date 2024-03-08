import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Icons from "@/svgs/icons";
import Logo from "@/svgs/logo";
import Glyphs from "@/svgs/glyphs";
import { loadProject } from "./projectService";
import React, { Suspense } from "react";
import _ from "underscore";
import { GraphLauncher } from "@/components/GraphLauncher";
import { ModelTree } from "@/components/ModelTree";
import { SearchBar } from "@/components/SearchBar";
import Spinner from "@/components/Spinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dbt Docs",
  description: "dbt Docs"
};

loadProject();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="/treedata" type="application/json" />
        <link rel="shortcut icon" href="data:image/vnd.microsoft.icon;charset=utf-8;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAACUWAAAlFgAAAAAAAAAAAABFZP8ASmn/H0pp/49Kaf/mSmn/7Epp/5ZJaf8pRmL/AUhn/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExs/wBHYf8AS2n/G0tp/39Kaf/bSmn/1Upp/35KaP8VSmj/AEtp/x1Kaf+tSmn/+0pp//9Kaf//Smn//Upp/9JKaf9rSWn/F0lq/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJaf8ASGj/E0lp/1pKaf+/Smn/+Epp//9Kaf//Smn/+Ulo/51JaP8YSmn/jEpp//pKaf//Smn//0pp//9Kaf//Smn//0pp//lKaf/ASWn/Ukhp/wtKav8ARWf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERn/wBLaP8ASGj/CUlp/0VKaf+2Smn/90pp//9Kaf//Smn//0pp//9Kaf//Smn/+kpp/4RKaf/lSmn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf/ySmn/oElp/zVGa/8ER2v/AAAAAAAAAAAAAAAAAAAAAABIaP8ARmj/BEpo/zJKaf+cSmn/7kpp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn/4Epp/+dKaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf/+Smn/3kpp/35JZ/8aSWr/AAAAAABIZ/8AQ2L/AEpo/xpJaf99Smn/3kpp//5Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf/uSmn/jEpp//tKaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn/0Epo/ytKaf8ASGj/AEho/w1JaP9gSmn/ykpp//lKaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//Upp/5dKaP8lSmn/z0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp/+lJaf9LTmv/AEhn/wZJaf87Smn/rUpp//JKaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf/VSWn/MUpp/wBKaf9sSmn/90pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn/lkhp/whJaf8jSWn/iEpp/+ZKaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn/+klp/2xYYv8ASmj/AEpo/xRKaf+9Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//JJaf9hSmn/Ykpp/9JKaf/8Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf/ESWn/G0lp/wAAAAAASmn/AEpp/1FKaf/uSmn//0pp//9Kaf//Smn//0pp//9Kaf//Smn/9kpp/9dKaf/zSmn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn/8klp/1RTYv8AEJT/AAAAAABKaP8ASmj/Ckpp/6BKaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf+lSWn/DElp/wAAAAAAAAAAAAAAAABKaf8ASmr/M0pp/95Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn/40lq/zpJaf8AAAAAAAAAAAAAAAAAAAAAAEpo/wBKZ/8ESmn/e0pp//lKaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//xKaf+CSmf/BEpo/wAAAAAAAAAAAAAAAAAAAAAAAAAAAElo/wBJaP8aSmn/zUpp//9Kaf//Smn//0pp//9Kaf//Smn//0pp//9Kaf//Smn//0pp/95Kaf/cSmn//0pp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" />
      </head>
      <body className={inter.className}>
        <main className="mx-8">
          <div>
            <GraphLauncher />
            <div className="app app-row">
              <div className="app-menu app-column">
                <div className="app-overlay" data-toggle=".app-menu"></div>
                <div className="app-header app-navbar app-shadow app-pad">
                  <div className="app-row app-middle">
                    <div className="app-body">
                      <Logo />
                    </div>
                  </div>
                </div>
                <div className="app-body">
                  <div className="app-scroll app-pad app-flush-right no-x-overflow">
                    <Suspense>
                      <ModelTree />
                    </Suspense>
                  </div>
                </div>
              </div>
              <SearchWrapper>{children}</SearchWrapper>
            </div>
          </div>
        </main>
        <div style={{ display: "none" }}>
          <Icons />
          <Glyphs />
        </div>
      </body>
    </html>
  );
}

export const SearchWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app-content app-column">
      <div className="app-header app-navbar app-shadow">
        <div className="app-frame app-pad app-row app-middle">
          <SearchBar />
        </div>
      </div>
      <div className="app-body">
        <Suspense
          fallback={
            <div
              style={{
                width: "100%",
                display: "grid",
                height: "100%",
                placeItems: "center",
              }}
            >
              <Spinner />
            </div>
          }
        >
          {children}
        </Suspense>
      </div>
    </div>
  );
};
