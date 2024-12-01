// supercluster.d.ts
declare module 'supercluster' {
    // Here you can declare the types as needed for your project
    interface SuperclusterOptions {
      radius: number;
      maxZoom: number;
      minZoom: number;
      // Other options depending on the supercluster API
    }
  
    class Supercluster {
      constructor(options?: SuperclusterOptions);
      load(geojson: any): void;
      getClusters(bbox: number[], zoom: number): any[];
      // Other methods provided by the supercluster module
    }
  
    export = Supercluster;
  }
  