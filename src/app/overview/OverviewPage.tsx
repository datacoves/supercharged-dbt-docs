import { getModelTree, loadProject, project } from "@/app/projectService";
import { MarkdownBlock } from "@/components/MarkdownBlock";
import _ from "lodash";

export default async function OverviewPage({ id }: { id?: string }) {
  await loadProject();

  let selected_overview = project.docs["doc.dbt.__overview__"];
  let overviews = _.filter(project.docs, { name: "__overview__" });
  _.each(overviews, function (overview) {
    if (overview.package_name != "dbt") {
      selected_overview = overview;
    }
  });

  if (id !== null) {
    selected_overview =
      project.docs[`doc.${id}.__${id}__`] || selected_overview;
    let overviews = _.filter(project.docs, { name: `__${id}__` });
    _.each(overviews, (overview) => {
      if (overview.package_name !== id) {
        selected_overview = overview;
      }
    });
  }
  return (
    <div className="app-details app-scroll app-pad">
      <div className="app-frame app-pad">
        <div className="panel panel-default">
          <div className="panel-body">
            <p>
              {selected_overview && <MarkdownBlock markdown={selected_overview.block_contents} />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
