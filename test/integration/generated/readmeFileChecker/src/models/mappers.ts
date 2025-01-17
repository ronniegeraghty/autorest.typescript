import * as coreClient from "@azure/core-client";

export const SecretSetParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretSetParameters",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      secretAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      }
    }
  }
};

export const Attributes: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Attributes",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      notBefore: {
        serializedName: "nbf",
        type: {
          name: "UnixTime"
        }
      },
      expires: {
        serializedName: "exp",
        type: {
          name: "UnixTime"
        }
      },
      created: {
        serializedName: "created",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      },
      updated: {
        serializedName: "updated",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const SecretBundle: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretBundle",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      kid: {
        serializedName: "kid",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      managed: {
        serializedName: "managed",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const KeyVaultError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const SecretUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretUpdateParameters",
    modelProperties: {
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      secretAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const SecretListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SecretItem"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecretItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretItem",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      managed: {
        serializedName: "managed",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DeletedSecretListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeletedSecretListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeletedSecretItem"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BackupSecretResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BackupSecretResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const SecretRestoreParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretRestoreParameters",
    modelProperties: {
      secretBundleBackup: {
        serializedName: "value",
        required: true,
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const SecretProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretProperties",
    modelProperties: {
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecretAttributes: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretAttributes",
    modelProperties: {
      ...Attributes.type.modelProperties,
      recoverableDays: {
        serializedName: "recoverableDays",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      recoveryLevel: {
        serializedName: "recoveryLevel",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeletedSecretBundle: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeletedSecretBundle",
    modelProperties: {
      ...SecretBundle.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        serializedName: "scheduledPurgeDate",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        serializedName: "deletedDate",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const DeletedSecretItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeletedSecretItem",
    modelProperties: {
      ...SecretItem.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        serializedName: "scheduledPurgeDate",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        serializedName: "deletedDate",
        readOnly: true,
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};
