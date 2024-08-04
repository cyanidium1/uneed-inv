'use client';

import { useEffect, useState } from 'react';
import Layout from '../layout';
import { performRequest } from '../lib/datocms';

export default function Home() {
  const [objectsData, setObjectsData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);

  const DATOCMS_QUERY_OBJS = `query {
    allObjects {
      id
      name
      _status
      sold
      mainphoto {
        url
      }
      description
      benefitstitle
      benefitsdesc
    }
    _allObjectsMeta {
      count
    }
  }`;

  const DATOCMS_QUERY_PRJS = `query {
    allProjects {
      description
      id
      advantages {
        description
        id
        title
      }
      mainphoto {
        url
      }
      name
      name2
      projectdetails {
        details
        id
        name
      }
      projectdetails2
      projectphotos {
        url
      }
      videolink
      videoplaceholder {
        url
      }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const objectsResponse = await performRequest({ query: DATOCMS_QUERY_OBJS });
        const projectsResponse = await performRequest({ query: DATOCMS_QUERY_PRJS });

        setObjectsData(objectsResponse.data.allObjects);
        setProjectsData(projectsResponse.data.allProjects);
        
        console.log('Objects Data:', objectsResponse.data.allObjects);
        console.log('Projects Data:', projectsResponse.data.allProjects);
      } catch (error) {
        console.error('Error fetching data from DatoCMS:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div>
            <h2>Objects</h2>
            {objectsData ? (
              <ul>
                {objectsData.map((object) => (
                  <li key={object.id}>
                    <img src={object.mainphoto.url} alt={object.name} width={200} />
                    <h3>{object.name}</h3>
                    <p>{object.description}</p>
                    <p>Status: {object._status}</p>
                    <p>Sold: {object.sold ? 'Yes' : 'No'}</p>
                    <p>Benefits Title: {object.benefitstitle}</p>
                    <p>Benefits Description: {object.benefitsdesc}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading objects...</p>
            )}
          </div>

          <div>
            <h2>Projects</h2>
            {projectsData ? (
              <ul>
                {projectsData.map((project) => (
                  <li key={project.id}>
                    <img src={project.mainphoto.url} alt={project.name} width={200} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div>
                      <h4>Advantages:</h4>
                      <ul>
                        {project.advantages.map((advantage) => (
                          <li key={advantage.id}>
                            <h5>{advantage.title}</h5>
                            <p>{advantage.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Project Details:</h4>
                      <ul>
                        {project.projectdetails.map((detail) => (
                          <li key={detail.id}>
                            <h5>{detail.name}</h5>
                            <p>{detail.details}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading projects...</p>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
