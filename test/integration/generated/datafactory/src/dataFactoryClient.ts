import {
  OperationsImpl,
  FactoriesImpl,
  ExposureControlImpl,
  IntegrationRuntimesImpl,
  IntegrationRuntimeObjectMetadataImpl,
  IntegrationRuntimeNodesImpl,
  LinkedServicesImpl,
  DatasetsImpl,
  PipelinesImpl,
  PipelineRunsImpl,
  ActivityRunsImpl,
  TriggersImpl,
  TriggerRunsImpl,
  DataFlowsImpl,
  DataFlowDebugSessionImpl,
  ManagedVirtualNetworksImpl,
  ManagedPrivateEndpointsImpl,
  PrivateEndPointConnectionsImpl,
  PrivateEndpointConnectionImpl,
  PrivateLinkResourcesImpl
} from "./operations";
import {
  Operations,
  Factories,
  ExposureControl,
  IntegrationRuntimes,
  IntegrationRuntimeObjectMetadata,
  IntegrationRuntimeNodes,
  LinkedServices,
  Datasets,
  Pipelines,
  PipelineRuns,
  ActivityRuns,
  Triggers,
  TriggerRuns,
  DataFlows,
  DataFlowDebugSession,
  ManagedVirtualNetworks,
  ManagedPrivateEndpoints,
  PrivateEndPointConnections,
  PrivateEndpointConnection,
  PrivateLinkResources
} from "./operationsInterfaces";
import { DataFactoryClientContext } from "./dataFactoryClientContext";
import { DataFactoryClientOptionalParams } from "./models";

export class DataFactoryClient extends DataFactoryClientContext {
  /**
   * Initializes a new instance of the DataFactoryClient class.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: DataFactoryClientOptionalParams
  ) {
    super(subscriptionId, options);
    this.operations = new OperationsImpl(this);
    this.factories = new FactoriesImpl(this);
    this.exposureControl = new ExposureControlImpl(this);
    this.integrationRuntimes = new IntegrationRuntimesImpl(this);
    this.integrationRuntimeObjectMetadata = new IntegrationRuntimeObjectMetadataImpl(
      this
    );
    this.integrationRuntimeNodes = new IntegrationRuntimeNodesImpl(this);
    this.linkedServices = new LinkedServicesImpl(this);
    this.datasets = new DatasetsImpl(this);
    this.pipelines = new PipelinesImpl(this);
    this.pipelineRuns = new PipelineRunsImpl(this);
    this.activityRuns = new ActivityRunsImpl(this);
    this.triggers = new TriggersImpl(this);
    this.triggerRuns = new TriggerRunsImpl(this);
    this.dataFlows = new DataFlowsImpl(this);
    this.dataFlowDebugSession = new DataFlowDebugSessionImpl(this);
    this.managedVirtualNetworks = new ManagedVirtualNetworksImpl(this);
    this.managedPrivateEndpoints = new ManagedPrivateEndpointsImpl(this);
    this.privateEndPointConnections = new PrivateEndPointConnectionsImpl(this);
    this.privateEndpointConnection = new PrivateEndpointConnectionImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
  }

  operations: Operations;
  factories: Factories;
  exposureControl: ExposureControl;
  integrationRuntimes: IntegrationRuntimes;
  integrationRuntimeObjectMetadata: IntegrationRuntimeObjectMetadata;
  integrationRuntimeNodes: IntegrationRuntimeNodes;
  linkedServices: LinkedServices;
  datasets: Datasets;
  pipelines: Pipelines;
  pipelineRuns: PipelineRuns;
  activityRuns: ActivityRuns;
  triggers: Triggers;
  triggerRuns: TriggerRuns;
  dataFlows: DataFlows;
  dataFlowDebugSession: DataFlowDebugSession;
  managedVirtualNetworks: ManagedVirtualNetworks;
  managedPrivateEndpoints: ManagedPrivateEndpoints;
  privateEndPointConnections: PrivateEndPointConnections;
  privateEndpointConnection: PrivateEndpointConnection;
  privateLinkResources: PrivateLinkResources;
}