import React, { Suspense } from "react";

export default function Home() {
  return (
    <div className="app-details app-scroll app-pad">
      <div className="app-frame app-pad">
        <div className="panel panel-default">
          <div className="panel-body">
          <h3 id="welcome-">Welcome!</h3>
          <p>Welcome to the auto-generated documentation for your dbt project!</p>
          <h3 id="navigation">Navigation</h3>
          <p>You can use the <span ng-non-bindable=""><code>Project</code></span> and <span ng-non-bindable=""><code>Database</code></span> navigation tabs on the left side of the window to explore the models
          in your project.</p>
          <h4 id="project-tab">Project Tab</h4>
          <p>The <span ng-non-bindable=""><code>Project</code></span> tab mirrors the directory structure of your dbt project. In this tab, you can see all of the
          models defined in your dbt project, as well as models imported from dbt packages.</p>
          <h4 id="database-tab">Database Tab</h4>
          <p>The <span ng-non-bindable=""><code>Database</code></span> tab also exposes your models, but in a format that looks more like a database explorer. This view
          shows relations (tables and views) grouped into database schemas. Note that ephemeral models are <em>not</em> shown
          in this interface, as they do not exist in the database.</p>
          <h3 id="graph-exploration">Graph Exploration</h3>
          <p>You can click the blue icon on the bottom-right corner of the page to view the lineage graph of your models.</p>
          <p>On model pages, you&apos;ll see the immediate parents and children of the model you&apos;re exploring. By clicking the <span ng-non-bindable=""><code>Expand</code></span>
          button at the top-right of this lineage pane, you&apos;ll be able to see all of the models that are used to build,
          or are built from, the model you&apos;re exploring.</p>
          <p>Once expanded, you&apos;ll be able to use the <span ng-non-bindable=""><code>--select</code></span> and <span ng-non-bindable=""><code>--exclude</code></span> model selection syntax to filter the
          models in the graph. For more information on model selection, check out the <a href="https://docs.getdbt.com/docs/model-selection-syntax">dbt docs</a>.</p>
          <p>Note that you can also right-click on models to interactively filter and explore the graph.</p>
          <h3 id="more-information">More information</h3>
          <ul>
          <li><a href="https://docs.getdbt.com/docs/introduction">What is dbt</a>?</li>
          <li>Read the <a href="https://docs.getdbt.com/docs/viewpoint">dbt viewpoint</a></li>
          <li><a href="https://docs.getdbt.com/docs/installation">Installation</a></li>
          <li>Join the <a href="https://www.getdbt.com/community/">dbt Community</a> for questions and discussion</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
